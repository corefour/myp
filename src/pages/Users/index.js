import React, { useState, useRef, useEffect } from "react";
import Table from "../../common/table"
import UserDetail from "./components/userform"
import { listUsers } from "../../services/Users";
import CustomModal from "../../common/modal";
import { connect } from "react-redux";
import { enableUser, disableUser } from "../../services/Users";
import "react-tabulator/css/bulma/tabulator_bulma.min.css"
import {
    Spinner,
    Button,
    Box,
    useDisclosure,
    Container
} from '@chakra-ui/react';


function User(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedUser, setSelectedUser] = useState(null)
    const tableref = useRef(null)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const columns = [
        {
            title: "Serial No",
            field: "serialNo",
            hozAlign: "left"
        }, {
            title: "Username",
            field: "username",
            hozAlign: "left"
        },
        {
            title: "Email Address",
            field: "emailAddress",
            hozAlign: "left"
        },
        {
            title: "Status",
            field: "status",
            hozAlign: "left",
            formatter: "tickCross",
            editor: props.profile.role === "Admins"
        }
    ]
    const columnConfig = {
        placeholder: "No Results",
        movableColumns: true,
        layout: "fitColumns",
        headerFilterPlaceholder: "",
    }

    useEffect(() => {
        setLoading(true)
        listUsers(10).then((res) => {
            let temp = []

            res.forEach((item, index) => {
                temp.push({
                    serialNo: index + 1,
                    username: item.Attributes[3].Value,
                    emailAddress: item.Attributes[4].Value,
                    status: item.Enabled
                })
            })
            setUsers(temp)
        })
        setLoading(false)
    }, [])

    function userStatus(value) {
        if (value.status) {
            disableUser(value.emailAddress)
                .then(res => {
                    let temp = [...selectedUser]
                    temp[value.serialNo - 1].status = false
                    setSelectedUser(temp)
                }).catch(err => console.log(err))
        }
        else {
            enableUser(value.emailAddress)
                .then(res => {
                    let temp = [...selectedUser]
                    temp[value.serialNo - 1].status = true
                    setSelectedUser(temp)
                }).catch(err => console.log(err))
        }
    }

    return (
        <>
            <Box my="40px" className="product">
                <Container maxW='container.xl'>
                    {loading ? (<Box>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Box>) : (
                        <Box>
                            <Table
                                tabledata={users}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                                rowClick={props.profile.role === "Users" ? ((e, row) => {
                                    setSelectedUser(row.getData())
                                    onOpen()
                                }) : (() => { })}
                                cellClick={props.profile.role === "Admins" ? ((e, cell) => userStatus(cell.getData())) : (() => { })}
                            />
                            <CustomModal
                                isOpen={isOpen}
                                onClose={onClose}
                                title={props.profile.role === "Users" ? (selectedUser === null ? "Add User" : "Edit User Role") : (selectedUser === null ? "" : "Enable User")}
                                body={<UserDetail selectedUser={selectedUser} setSelectedUser={setSelectedUser} />}
                            />
                            <Button
                                onClick={() => {
                                    setSelectedUser(null)
                                    onOpen()
                                }}
                                float="right"
                                bgColor="pink.500"
                                color="blue.50"
                                mt="30px"
                                _hover={{ bg: "pink.700" }}
                                isDisabled={props.profile.role === "Admins"}
                            >
                                Add User
                            </Button>

                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile, roles: state.greduce.roles } }

export default connect(mapStateToProps)(User)
import React, { useState, useRef, useEffect } from "react";
import Table from "../../common/table"
import UserDetail from "./components/userform"
import { listUsers } from "../../services/Users";
import CustomModal from "../../common/modal";
import { connect } from "react-redux";
import { enableUser, disableUser, listUserRole } from "../../services/Users";
import "react-tabulator/css/bulma/tabulator_bulma.min.css"
import {
    Spinner,
    Button,
    Box,
    useDisclosure
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
            hozAlign: "center"
        }, {
            title: "Username",
            field: "username",
            hozAlign: "center"
        },
        // {
        //     title: "profileImage",
        //     field: "profileImage",
        // },
        {
            title: "Email Address",
            field: "emailAddress",
            hozAlign: "center"
        },
        {
            title: "Status",
            field: "status",
            hozAlign: "center",
            formatter: "tickCross",
            editor: props.profile.role === "Admins"
        },
        {
            title: "Role",
            field: "role",
            hozAlign: "center"
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
            // console.log(res);

            res.forEach((item, index) => {
                let x = ""
                listUserRole(item.Attributes[0].Value).then(Response => {
                    // console.log(Response.Groups[0], item.Attributes[4].Value);

                    if (Response.Groups[0] !== undefined)
                        x = Response.Groups[0].GroupName

                }).catch(err => console.log(err))

                console.log(x);
                temp.push({
                    serialNo: index + 1,
                    username: item.Attributes[3].Value,
                    emailAddress: item.Attributes[4].Value,
                    status: item.Enabled,
                    role: x
                })
            })
            setUsers(temp)
            setLoading(false)
        })
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
                    {
                        props.profile.role === "Users" && <Button onClick={() => {
                            setSelectedUser(null)
                            onOpen()
                        }} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>
                            Add User
                        </Button>
                    }
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
                </Box>
            )}
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile, roles: state.greduce.roles } }

export default connect(mapStateToProps)(User)
import React, { useState, useRef, useEffect } from "react";
import Table from "../../common/table"
// import Modal from "../../common/modal"
import { listUsers } from "../../services/Users";
import { connect } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import "react-tabulator/css/bulma/tabulator_bulma.min.css"
import {
    Spinner,
    Button,
    Box,
    useDisclosure
} from '@chakra-ui/react';
import CustomModal from "../../common/modal";


function User(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    let navigate = useNavigate();
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
            formatter: "tickCross"
        },
        {
            title: "Role",
            field: "role",
            hozAlign: "center"
        }
    ]

    useEffect(() => {
        setLoading(true)
        listUsers(10).then((res) => {
            let temp = []
            console.log(res);

            res.Users.forEach((item, index) => {
                temp.push({
                    serialNo: index + 1,
                    username: item.Attributes[3].Value,
                    // profileImage:item.Attributes,
                    emailAddress: item.Attributes[4].Value,
                    status: item.Enabled,
                    role:"IDK RAJ HAS NOT RETURNED THE ROLE"
                })
            })

            setUsers(temp)
            setLoading(false)
        })
    }, [])

    const columnConfig = {
        placeholder: "No Results",
        movableColumns: true,
        layout: "fitColumns",
        headerFilterPlaceholder: "",
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
                    <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add User</Button>
                    <Table
                        tabledata={users}
                        columns={columns}
                        options={columnConfig}
                        innerRef={tableref}
                        rowClick={(e, row) => onOpen()}
                    />
                    <CustomModal isOpen={isOpen} onClose={onClose}/>
                </Box>
            )}
        </>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile, roles: state.greduce.roles } }

// export default User
export default connect(mapStateToProps)(User)
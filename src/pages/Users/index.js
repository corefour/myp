import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Button,
    useDisclosure,
    Spinner,
    Td
} from '@chakra-ui/react';
import { listUsers } from "../../services/Users";
import UserRow from "./components/userlist"
import {useNavigate, Outlet} from 'react-router-dom';

function User() {
    let navigate = useNavigate();

    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        listUsers(10).then((res) => setUserDetails(res.Users))
    }, [])


    return (
        <Box my="40px" className="users">
            <Container maxW='container.xl'>
                <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add User</Button>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sr. No.</Th>
                            <Th>Username</Th>
                            <Th>Profile Image</Th>
                            <Th>Email Address</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {userDetails.length ? <UserRow userdetails={userDetails} /> : <Td><Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        /></Td>}
                    </Tbody>
                </Table>
            </Container>
            {/* <Outlet /> */}
        </Box>
    )
}

export default User
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
    Td,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import {useNavigate, Outlet} from 'react-router-dom';
import { useCounter } from "@chakra-ui/counter"

function User() {
    let navigate = useNavigate();

    const [userDetails, setUserDetails] = useState([])

    return (
        <Box mt="40px" className="purchase">
            <Container maxW='container.xl'>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sr. No.</Th>
                            <Th>Product Name</Th>
                            <Th>Product Image</Th>
                            <Th>Quantity Left</Th>
                            <Th>Added</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1.</Td>
                            <Td>Product Name 1</Td>
                            <Td>Image</Td>
                            <Td>50</Td>
                            <Td>
                                <NumberInput defaultValue={15} min={1} max={20} w={100}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Td>
                            <Td><Button className="btn-add" bgColor="gray.700" color="blue.50" mb="30px" _hover={{ bg: "pink.500" }} mb="0">Add</Button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Container>
            {/* <Outlet /> */}
        </Box>
    )
}

export default User
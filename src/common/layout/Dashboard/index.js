import React from "react";
import TopBar from "../Home/topbar";
import {
    Box, 
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';

export default function Home({signOut, user})
{
   return(
    <>
        <TopBar/>
        <Box mt="40px">
            <Container maxW='container.xl'>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sr. No.</Th>
                            <Th>Username</Th>
                            <Th>Profile Image</Th>
                            <Th>Email Address</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1.</Td>
                            <Td>shivanipandit88</Td>
                            <Td>Image 1</Td>
                            <Td>shivani.pandit@sjsu.edu</Td>
                            <Td>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "gray.900" }} _active={{ bg: "gray.900" }}>
                                    Select
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Modify</MenuItem>
                                    <MenuItem>Disable</MenuItem>
                                </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>2.</Td>
                            <Td>rajkinkhabwala</Td>
                            <Td>Image 2</Td>
                            <Td>rajparagbhai.kinkhabwala@sjsu.edu </Td>
                            <Td>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "gray.900" }} _active={{ bg: "gray.900" }}>
                                    Select
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Modify</MenuItem>
                                    <MenuItem>Disable</MenuItem>
                                </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>3.</Td>
                            <Td>yashkamtekar</Td>
                            <Td >Image 3</Td>
                            <Td>yash.kamtekar@sjsu.edu</Td>
                            <Td>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "gray.900" }} _active={{ bg: "gray.900" }}>
                                    Select
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Modify</MenuItem>
                                    <MenuItem>Disable</MenuItem>
                                </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Container>
        </Box>
    </>
   )
}
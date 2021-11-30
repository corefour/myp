import React from "react";
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
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';

export default function User({ signOut, user }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <Box mt="40px">
            <Container maxW='container.xl'>
                <Button onClick={onOpen} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add User</Button>
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
                        <Tr>
                            <Td>1.</Td>
                            <Td>shivanipandit88</Td>
                            <Td>Image 1</Td>
                            <Td>shivani.pandit@sjsu.edu</Td>
                            <Td color="orange">Active</Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "pink.600" }} _active={{ bg: "pink.600" }}>
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
                            <Td color="red">Disabled</Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "pink.600" }} _active={{ bg: "pink.600" }}>
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
                            <Td color="orange">Active</Td>
                            <Td>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "pink.600" }} _active={{ bg: "pink.600" }}>
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
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input ref={initialRef} placeholder='First name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder='Last name' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </Box>
    )
}
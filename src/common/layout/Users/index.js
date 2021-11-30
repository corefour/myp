import React from "react";
import {
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
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
import listUsers from "../../../services/Users/listUsers";
import UserRow from "./components/userlist"

function User({ signOut, user }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    console.log(listUsers(10).then((res) => console.log(res)))
    
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
                        <UserRow userdetails={[
                            { id: 1, name: "Shivani Pandit", email: "shivani.pandit@sjsu.edu", image: "image 1", status: true },
                            { id: 2, name: "Raj Kinkhabwala", email: "raj.kinkhabwala@sjsu.edu", image: "image 2", status: false },
                            { id: 3, name: "Yash Kamtekar", email: "yash.kamtekar@sjsu.edu", image: "image 3", status: false },
                        ]} />
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

export default User
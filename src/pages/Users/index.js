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

import listUsers from "../../services/Users/listUsers";
import UserRow from "./components/userlist"

function User({ signOut, user }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        listUsers(10).then((res) => setUserDetails(res.Users))
    }, [])


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
                        {userDetails.length ? <UserRow userdetails={userDetails} /> : <>Loading</>}
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
                            <FormControl isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input ref={initialRef} placeholder='Full Name' />
                            </FormControl>
                            <FormControl mt={4} isRequired>
                                <FormLabel>Profile Image</FormLabel>
                                <Input placeholder='Profile Image' />
                            </FormControl>
                            <FormControl mt={4} id='email' isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" bgColor="pink.500" color="blue.50" _hover={{ bg: "pink.700" }} mr={3}>
                                Submit
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
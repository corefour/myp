import React, { useState, useEffect } from "react";
import {
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

function Usermodal() {

    return(
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
    )
}

export default Usermodal
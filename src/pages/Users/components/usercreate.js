import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function UserCreate(){

    return(
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/users" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add a New User</Text>
                    <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Full Name' />
                    </FormControl>
                    <FormControl mt={4} isRequired>
                        <FormLabel>Profile Image</FormLabel>
                        <Input placeholder='Profile Image' />
                    </FormControl>
                    <FormControl mt={4} id='email' isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                    </FormControl>
                    <Button
                        mt={4}
                        type='submit'
                        bgColor="pink.500"
                        color="blue.50"
                        _hover={{ bg: "pink.700" }}
                        float="right"
                    >
                        Submit
                    </Button>
                    <Box className="clear"></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default UserCreate;
import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import DatePicker from 'react-date-picker';

function UserCreate(){

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
      } = useForm();
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
          }, 3000);
        });
      }

      const [value, onChange] = useState(new Date());

    return(
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/users" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add a New User</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Full Name</FormLabel>
                            <Input placeholder='Full Name' id="name"
                            {...register("name", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.name}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input placeholder='Password' id="password"
                            type="password"
                            {...register("password", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.name}>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input type='email' placeholder="Email Address" id="email"
                            {...register("email", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.name}>
                            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                            <DatePicker
                                onChange={onChange}
                                value={value}
                                id="dob"
                            />
                            {/* <FormErrorMessage>
                                {errors.dob && errors.dob.message}
                            </FormErrorMessage> */}
                        </FormControl>
                        <Button
                            mt={4}
                            type='submit'
                            bgColor="pink.500"
                            color="blue.50"
                            _hover={{ bg: "pink.700" }}
                            float="right"
                            isLoading={isSubmitting}
                        >
                            Submit
                        </Button>
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default UserCreate;
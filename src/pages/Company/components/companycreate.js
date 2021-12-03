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
import { addCompany } from "../../../services/Company"
import { useNavigate, Outlet } from 'react-router-dom';

function UserCreate() {
    let navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                addCompany({ input: values }).then(() => {
                    navigate('/company')
                }).catch((err) => console.log(err));
                resolve();
            }, 3000);
        });
    }

    const [value, onChange] = useState(new Date());

    return (
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/company" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add a New Company</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Company Name</FormLabel>
                            <Input placeholder='Company Name' id="name"
                                {...register("name", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.description}>
                            <FormLabel htmlFor="description">Company Description</FormLabel>
                            <Input placeholder='Company Description' id="description"
                                {...register("description", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.description && errors.description.message}
                            </FormErrorMessage>
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
                            Save
                        </Button>
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default UserCreate;
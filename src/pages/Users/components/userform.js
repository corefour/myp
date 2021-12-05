import React, { useState, useEffect } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Text,
    Button
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";


function UserDetail(props) {
    console.log(props);
    useEffect(() => {
        if (props.selectedUser !== null) {
            setValue("name", props.selectedUser.username)
        }
    }, [])

    const {
        handleSubmit,
        register,
        setValue,
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
    return (
        <Box>
            <Container maxW="container.xl" mt="30px">
                <Box className="form" boxSize="sm" mx="auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Full Name</FormLabel>
                            <Input placeholder="Full Name" id="name"
                                {...register("name", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl> */}


                        <Button
                            mt={4}
                            type="submit"
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

export default UserDetail
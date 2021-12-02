import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Button,
    Grid,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useNavigate, Outlet} from 'react-router-dom';

function User() {
    let navigate = useNavigate();



    return (
        <Box mt="40px" className="company">
            <Container maxW='container.xl'>
                <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Company</Button>
                <Box className="clear"></Box>
                <Grid templateColumns='repeat(4, 1fr)' gap={30} textAlign="center" lineHeight="70px" fontSize="18" className="companyList">
                    <Link to="/">
                        <Text>Company Name</Text>
                    </Link>
                    <Link to="/">
                        <Text>Company Name</Text>
                    </Link>
                    <Link to="/">
                        <Text>Company Name</Text>
                    </Link>
                    <Link to="/">
                        <Text>Company Name</Text>
                    </Link>
                    <Link to="/" w='100%' h='70' bg='gray.100' borderRadius="5" _hover={{ bg: "gray.500", color: "gray.100", boxShadow: "lg" }} transition="all" transitionDuration="0.4s">
                        <Text>Company Name</Text>
                    </Link>
                </Grid>
            </Container>
            {/* <Outlet /> */}
        </Box>
    )
}

export default User
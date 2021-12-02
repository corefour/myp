import React from "react";
import {
    Grid,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Companylist(props) {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={30} textAlign="center" lineHeight="70px" fontSize="18" className="companyList">
            {
                props.companys.map((item) => (
                    <Link to={"/company/" + item.id} w='100%' h='70' bg='gray.100' borderRadius="5" _hover={{ bg: "gray.500", color: "gray.100", boxShadow: "lg" }} transition="all" transitionDuration="0.4s">
                        <Text>{item.name}</Text>
                    </Link>
                ))
            }

        </Grid>
    )
}

export default Companylist
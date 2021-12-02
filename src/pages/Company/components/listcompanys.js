import React from "react";
import {
    Grid,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import { FaRegTrashAlt } from 'react-icons/fa';

function Companylist(props) {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={30} textAlign="center" lineHeight="70px" fontSize="18" className="companyList">
            {
                props.companys.map((item) => (
                    <Link to={"/company/" + item.id}>
                        <Text>{item.name}</Text>
                        <Button className="deleteIcon"><FaRegTrashAlt /></Button>
                    </Link>
                ))
            }

        </Grid>
    )
}

export default Companylist
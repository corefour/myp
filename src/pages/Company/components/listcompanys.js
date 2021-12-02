import React from "react";
import {
    Grid,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Companylist(props) {
    // console.log(props);
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={30} textAlign="center" lineHeight="70px" fontSize="18" className="companyList">
            {/* {
                props.companys.map((item) => (
                    <Link to={"/company/" + item.id}>
                        <Text>{item.name}</Text>
                    </Link>
                ))
            } */}

        </Grid>
    )
}

export default Companylist
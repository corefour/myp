import React from "react";
import {
    Grid,
    Text,
    Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import pic1 from "../../../assets/pic1.jpg";

function Productlist(props) {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={30} textAlign="center" lineHeight="50px" fontSize="18" className="productList">
            {
                props.products.map((item) => (
                    <Link to="/">
                        <Image src={["", 0, false, NaN, null, undefined].includes(item.image) ? pic1 : item.image} alt="" />
                        <Text>{item.name}</Text>
                    </Link>
                ))
            }

        </Grid>
    )
}

export default Productlist
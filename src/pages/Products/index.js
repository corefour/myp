import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Button,
    useDisclosure,
    Spinner,
    Td
} from '@chakra-ui/react';
import { allProducts } from "../../services/Product";

import { useNavigate, Outlet } from 'react-router-dom';

function Products() {
    let navigate = useNavigate()

    allProducts().then((res) => console.log(res))

    return (
        <>
            Products page
        </>
    )
}

export default Products
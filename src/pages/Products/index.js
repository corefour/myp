import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Button,
    Grid,
    Link,
    Text,
    Image
} from '@chakra-ui/react';
import { allProducts } from "../../services/Product";
import Productlist from "./components/listproduct";
// import Companylist from "./components/listproduts"
import { useNavigate, Outlet } from 'react-router-dom';

function Products() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => { allProducts().then((res) => setProducts(res.data.listProducts.items)) }, [])

    allProducts().then((res) => console.log(res))

    return (
        <>
            <Box mt="40px" className="product">
                <Container maxW='container.xl'>
                    <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Product</Button>
                    <Box className="clear"></Box>
                    <Productlist products={products} setProducts={setProducts} />
                </Container>
                {/* <Outlet /> */}
            </Box>
        </>
    )
}

export default Products
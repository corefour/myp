import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Button
} from '@chakra-ui/react';

import Companylist from "./components/listcompanys"
import { allCompanys } from "../../services/Company";
import { useNavigate, Outlet } from 'react-router-dom';

function User() {
    let navigate = useNavigate();
    const [companys, setCompanys] = useState([])

    useEffect(() => { allCompanys().then((res) => setCompanys(res.data.listCompanys.items)) }, [])

    return (
        <Box mt="40px" className="company">
            <Container maxW='container.xl'>
                <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Company</Button>
                <Box className="clear">
                    <Companylist companys={companys} />
                </Box>

            </Container>
            {/* <Outlet /> */}
        </Box>
    )
}

export default User
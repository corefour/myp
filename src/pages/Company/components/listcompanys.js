import React from "react";
import {
    Grid,
    Text,
    Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeCompany } from "../../../services/Company"

function Companylist(props) {

    function deleteCompany(id, index) {
        removeCompany(id)
        let temp = [...props.companys]
        temp.splice(index, 1)
        props.setCompanys(temp)
    }

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={30} textAlign="center" lineHeight="70px" fontSize="18" className="companyList">
            {
                props.companys.map((item, index) => (
                    <>
                        <Box className="indiCompany">
                            <Button className="deleteIcon" onClick={() => deleteCompany(item.id, index)}><FaRegTrashAlt /></Button>
                            <Link to={"/company/" + item.id}>
                                <Text>{item.name}</Text>
                            </Link>
                        </Box>
                    </>
                ))
            }

        </Grid>
    )
}

export default Companylist
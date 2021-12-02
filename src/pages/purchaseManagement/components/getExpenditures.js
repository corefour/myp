import { Link } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getExpendituresById } from "../../../services/Purchases";



function GetExpenditures() {
    const {
        handleSubmit,
        register,
        formState: { errors }
      } = useForm();
    
      const [expenditureDetails, setExpenditureDetails] = useState([])



      function onSubmit(values, e) {
        return new Promise((resolve) => {
            getExpendituresById(values.companyId).then((res) =>  { setExpenditureDetails(res.data.listExpenditures.items);   
                e.target.reset();      
            })
        });
      }


      return (
    <Box>
    <Container maxW='container.xl' mt="30px">
        <Link to="/purchases" className="btn-custom">Back</Link>
        <Box className="form" boxSize="sm" mx="auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.companyId}>
                    <FormLabel htmlFor="companyId">Enter Company Id</FormLabel>
                    <Input placeholder='Enter Company Id' id="companyId"
                    {...register("companyId", {required: "This is required"})} />
                    <FormErrorMessage>
                        {errors.companyId && errors.companyId.message}
                    </FormErrorMessage>
                </FormControl>
                <Button
                    mt={4}
                    type='submit'
                    bgColor="pink.500"
                    color="blue.50"
                    _hover={{ bg: "pink.700" }}
                    float="right"
                >
                    Get Expenditures
                </Button>
                <Box className="clear"></Box>
            </form>

            <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Expenditure</Th>
                            <Th>Reason</Th>
                            <Th>CompanyId</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {
                        expenditureDetails.map((expenditure, index) => {
                          return <Tr key={index}>
                                <Td>{index + 1}</Td>
                                   <Td>{ expenditure.expenditur}</Td>
                                   <Td>{ expenditure.reason}</Td>
                                   <Td>{ expenditure.companyID}</Td>
                               </Tr>
                           })

                        }
                    </Tbody>
                </Table>
        </Box>
    </Container>
</Box>
)

}

export default GetExpenditures





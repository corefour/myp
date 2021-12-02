import {
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Button,
    Td
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import { getPurchaseOrders } from "../../services/Purchases";
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function Purchases() {
    const [orderDetails, setOrderDetails] = useState([])

    useEffect(() => {
        getPurchaseOrders().then((res) =>  { setOrderDetails(res.data.listPurchases.items);         
            console.log(orderDetails, 'ord')
        })
    }, [])


    let navigate = useNavigate();

    function exportPDF() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Purchase Orders List";
        const headers = [["ITEMS", "QUANTITIES", "DATE OF ORDER", "SUPPLIERS’ DETAILS", "TOTAL COST", "CURRENT STATUS"]];
    
        const data = orderDetails.map(elt=> [elt.itemsOrdered, elt.quantity, elt.dateOfOrder, elt.supplierDetails, elt.totalCost, elt.currentStatus]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("PurchaseOrderList.pdf")
      }
    

    return (
        
        <Box mt="40px" className="users">
            <Container maxW='container.xl'>
             <Button onClick={exportPDF} float="right" bgColor="pink.500" color="blue.50" ml="20px" _hover={{ bg: "pink.700" }}>Download as PDF</Button>
                <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Orders</Button>
                <Button onClick={() => navigate('expenditures')}  mr="10px"  float="right" bgColor="pink.500" color="blue.50" mb="30px" ml="20px" _hover={{ bg: "pink.700" }}>Add Expenditures</Button>
                <Button onClick={() => navigate('expendituresById')}  mr="10px"  float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Get Expenditures</Button>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Items</Th>
                            <Th>Quantities</Th>
                            <Th>Date of order</Th>
                            <Th>Supplier’s details</Th>
                            <Th>Total cost</Th>
                            <Th>Current Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {
                        orderDetails.map((order, index) => {
                          return <Tr key={index}>
                                <Td>{index + 1}</Td>
                                   <Td>{ order.itemsOrdered}</Td>
                                   <Td>{ order.quantity}</Td>
                                   <Td>{ order.dateOfOrder}</Td>
                                   <Td>{ order.supplierDetails}</Td>
                                   <Td>{ order.totalCost}</Td>
                                   <Td>{ order.currentStatus}</Td>

                                </Tr>
                           })

                        }
                    </Tbody>
                </Table>
            </Container>
            {/* <Outlet /> */}
        </Box>
    )
}

export default Purchases
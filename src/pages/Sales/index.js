import React, { useState, useEffect, useRef } from "react";
import { allSales } from "../../services/Sales";
import Table from "../../common/table";
import CustomModal from "../../common/modal";
import "react-tabulator/css/bulma/tabulator_bulma.min.css";
import {
    Box,
    Button,
    Spinner,
    useDisclosure,
    Container
} from '@chakra-ui/react';


function Sales() {
    const [sales, setSales] = useState([])
    const columns = [
        {
            title: "Sr. No.",
            field: "1",
            hozAlign: "left"
        },
        {
            title: "Product Name",
            field: "product",
            hozAlign: "left"
        },
        {
            title: "Product Image",
            field: "image",
            hozAlign: "left"
        },
        {
            title: "Quantity Left",
            field: "quantity",
            hozAlign: "left"
        },
        {
            title: "Add",
            field: "quantity",
            hozAlign: "left"
        }
    ]
    const columnConfig = {
        placeholder: "No Results",
        movableColumns: true,
        layout: "fitColumns",
        headerFilterPlaceholder: "",
    }
    const [loading, setLoading] = useState(false)
    const tableref = useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        allSales().then(res => {
            console.log(res);
        })
    }, [])

    return (
        <>
            <Box my="40px" className="product">
                <Container maxW='container.xl'>
                    {loading ? (<Box>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Box>) : (
                        <Box>
                            <Table
                                tabledata={sales}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                                rowClick={((e, row) => {
                                    console.log(row.getData());
                                    // <Link to={"/" + row.getData().id + "/"} />
                                })}
                            />
                            <CustomModal
                                isOpen={isOpen}
                                onClose={onClose}
                                title="Add Sales"
                                // body={<AddCompany setCompanys={setCompanys} />}
                            />

                            <Button
                                onClick={() => {
                                    onOpen()
                                }}
                                float="right"
                                bgColor="pink.500"
                                color="blue.50"
                                mb="30px"
                                _hover={{ bg: "pink.700" }}
                            >
                                Add Sales
                            </Button>

                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default Sales
import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Button,
    Spinner,
    useDisclosure
} from '@chakra-ui/react';
import "react-tabulator/css/bulma/tabulator_bulma.min.css";
import Table from "../../common/table";
import CustomModal from "../../common/modal";
import AddCompany from "./components/addcompany";
import CompanyProfile from "./components/companyprofile";
import { allCompanys } from "../../services/Company";

function Company() {
    const [selectedCompany, setSelectedCompany] = useState(null)
    const [companys, setCompanys] = useState([])
    const columns = [
        {
            title: "Company Name",
            field: "name",
            hozAlign: "center"
        },
        {
            title: "Company Owner",
            field: "owner",
            hozAlign: "center"
        },
        {
            title: "Company created",
            field: "createdAt",
            hozAlign: "center"
        },
        {
            title: "Company Description",
            field: "description",
            hozAlign: "center"
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
        allCompanys().then((res) => {
            console.log(res.data.listCompanys.items);
            setCompanys(res.data.listCompanys.items)
        })
    }, [])

    return (
        <>
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
                    {selectedCompany === null && <Table
                        tabledata={companys}
                        columns={columns}
                        options={columnConfig}
                        innerRef={tableref}
                        rowClick={((e, row) => {
                            setSelectedCompany(row.getData())
                        })}
                    />}
                    <CustomModal
                        isOpen={isOpen}
                        onClose={onClose}
                        title="Add Company"
                        body={<AddCompany setCompanys={setCompanys} />}
                    />

                    {selectedCompany !== null && <CompanyProfile selectedCompany={selectedCompany} />}

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
                        Add Company
                    </Button>

                </Box>
            )}
        </>
    )
}

export default Company
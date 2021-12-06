import React, { useState, useEffect } from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Container,
    Image,
    Text
} from '@chakra-ui/react';
import logo from "../../../assets/company-logo.png";
import bg from "../../../assets/bg.jpg";
// import Products from "../../Products"
import { useParams } from 'react-router-dom';
import { singleCompany } from "../../../services/Company"

function CompanyProfile(props) {
    console.log(props);
    // let { id } = useParams();

    // const [val, setVal] = useState({ name: "", description: "", image: "" })

    // useEffect(() => {
    //     singleCompany(id).then((res) => setVal(res.data.getCompany))
    // }, [])

    return (
        <Box className="company-profile">
            <Box className="banner">
                <Image src={bg} alt="Banner" className="bannerImg" />
                <Container maxW='container.xl'>
                    <Box className="company-title">
                        <Image src={logo} alt="Company Logo" />
                        <Text>{props.selectedCompany.name}</Text>
                    </Box>
                </Container>
            </Box>
            <Box className="tabs">
                <Container maxW='container.xl'>
                    <Tabs>
                        <TabList>
                            <Tab>Products</Tab>
                            <Tab>Sales</Tab>
                            <Tab>Expenses</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                {/* <Products /> */}
                                one
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
        </Box>
    )
}

export default CompanyProfile
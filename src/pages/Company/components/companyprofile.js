import React from 'react';
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

export default function CompanyProfile(){

    return (
        <Box className="company-profile">
            <Box className="banner">
                <Image src={bg} alt="Banner" className="bannerImg" />
                <Container maxW='container.xl'>
                    <Box className="company-title">
                        <Image src={logo} alt="Company Logo" />
                        <Text>Company Name</Text>
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
                            <p>one!</p>
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
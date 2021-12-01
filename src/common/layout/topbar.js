import React from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Container,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown, FaUserCircle } from 'react-icons/fa';
import { Auth } from 'aws-amplify';


function TopBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    async function signOut() {
        try {
            await Auth.signOut().then(() =>{
            window.location.reload(false);
            });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <Box bgColor="blue.50" py="15">
            <Container maxW='container.xl'>
                <Box float="left">
                    <Button ref={btnRef} bgColor="gray.700" color="gray.100" _hover={{ bg: "pink.600" }} onClick={onOpen}>
                        <FaBars />
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent py="50px" px="20px" className="sidenav">
                            <DrawerCloseButton />
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/users" bgColor="gray.700" color="gray.100" py="10px" px="30px" rounded="5" mb="20px"_hover={{ bg: "pink.600" }}>Users</Link>
                        </DrawerContent>
                    </Drawer>
                </Box>
                <Box float="right" className="profile">
                    <Menu>
                        <MenuButton>
                            <FaUserCircle color="pink.800" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={signOut}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <div className="clear"></div>
            </Container>
        </Box>
    )
}
export default TopBar
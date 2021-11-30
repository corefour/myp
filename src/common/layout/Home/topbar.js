import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button, Input,
    Container,
    Popover,
    PopoverTrigger,
    PopoverContent,
    List,
    PopoverBody,
    PopoverHeader,
    ListItem,
    Avatar,
    Box
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
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
        <Box bgColor="blue.100" py="15">
            <Container maxW='container.xl'>
                <Box float="left">
                    <Button ref={btnRef} bgColor="gray.700" color="gray.100" _hover={{ bg: "gray.900" }} onClick={onOpen}>
                        <FaBars />
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Create your account</DrawerHeader>

                            <DrawerBody>
                                <Input placeholder='Type here...' />
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='blue'>Save</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
                <Box float="right">
                    <Popover>
                        <PopoverTrigger>
                            <Avatar size="sm" name='Yash Kamtekar' src='https://bit.ly/tioluwani-kolawole' />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader>Yash Kamtekar!</PopoverHeader>
                            <PopoverBody>
                                <List spacing={2}>
                                    <ListItem>
                                        Profile
                                    </ListItem>
                                    <ListItem>
                                        Setting
                                    </ListItem>
                                    <ListItem>
                                        <Button colorScheme='teal' variant='link' onClick={signOut}>
                                            Logout
                                        </Button>
                                    </ListItem>
                                </List>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
                <div className="clear"></div>
            </Container>
        </Box>
    )
}
export default TopBar
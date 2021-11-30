import React from "react";
// import { Button, Flex, Popover, Box, PopoverTrigger, PopoverContent, List, PopoverBody, PopoverHeader, ListItem, Spacer, Wrap, WrapItem, Avatar, useBreakpointValue } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Input, Container, Flex, Popover, Box, PopoverTrigger, PopoverContent, List, PopoverBody, PopoverHeader, ListItem, Spacer, Wrap, WrapItem, Avatar, useBreakpointValue } from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';

function TopBar(props) {
    // return (
    //     <>
    //         <Flex p={1}>
    //             <Box as='a' color='teal.400' href='#' fontWeight='bold'>
    //                 <Button colorScheme='teal' variant='outline'>
    //                     Admin
    //                 </Button>
    //                 <Button colorScheme='teal' variant='outline'>
    //                     Home
    //                 </Button>
    //             </Box>
    //             <Spacer />
    //             <Wrap>
    //                 <WrapItem>
    //                     <Popover>
    //                         <PopoverTrigger>
    //                             <Avatar size="sm" name='Yash Kamtekar' src='https://bit.ly/tioluwani-kolawole' />
    //                         </PopoverTrigger>
    //                         <PopoverContent>
    //                             <PopoverHeader>Yash Kamtekar!</PopoverHeader>
    //                             <PopoverBody>
    //                                 <List spacing={2}>
    //                                     <ListItem>
    //                                         Profile
    //                                     </ListItem>
    //                                     <ListItem>
    //                                         Setting
    //                                     </ListItem>
    //                                     <ListItem>
    //                                         Logout
    //                                     </ListItem>
    //                                 </List>
    //                             </PopoverBody>
    //                         </PopoverContent>
    //                     </Popover>
    //                 </WrapItem>
    //             </Wrap>
    //         </Flex>
    //     </>
    // )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <div className="header">
            <Container maxW='container.xl'>
                <div className="menu">
                    <Button ref={btnRef} bgColor="gray.700" color="gray.100" _hover={{ bg: "gray.900" }} onClick={onOpen}>
                        <FaIcons.FaBars />
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
                </div>
                <div className="profile">
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
                                    Logout
                                    </ListItem>
                                </List>
                            </PopoverBody>
                        </PopoverContent>
                   </Popover>
                </div>
                <div className="clear"></div>
            </Container>
        </div>
    )
}
export default TopBar
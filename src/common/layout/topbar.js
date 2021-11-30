import React from "react"
import { Button, Flex, Popover, Box, PopoverTrigger, PopoverContent, List, PopoverBody, PopoverHeader, ListItem, Spacer, Wrap, WrapItem, Avatar } from '@chakra-ui/react'

function TopBar() {
    return (
        <>
            <Flex p={1}>
                <Box as='a' color='teal.400' href='#' fontWeight='bold'>
                    <Button colorScheme='teal' variant='outline'>
                        Admin
                    </Button>
                    <Button colorScheme='teal' variant='outline'>
                        Home
                    </Button>
                </Box>
                <Spacer />
                <Wrap>
                    <WrapItem>
                        <Popover>
                            <PopoverTrigger>
                                <Avatar size="sm" name='Yash Kamtekar' src='https://bit.ly/tioluwani-kolawole' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader><h1>Hello</h1></PopoverHeader>
                                <PopoverBody>
                                    <List spacing={2}>
                                        <ListItem>
                                            Profile
                                        </ListItem>
                                        <ListItem>
                                            Setting
                                        </ListItem>
                                        <ListItem>
                                        <button>Sign out</button>
                                        </ListItem>
                                    </List>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </WrapItem>
                </Wrap>
            </Flex>
        </>
    )
}
export default TopBar
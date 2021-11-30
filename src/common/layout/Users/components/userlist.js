import React from "react";
import {
    Tr,
    Td,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';


function UserRow(props) {
    return (
        <>
            {props.userdetails.map((item) => (
                <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.image}</Td>
                    <Td>{item.email}</Td>
                    <Td color={item.status ? "orange" : "red"}>{item.status ? "Active" : "Disabled"}</Td>
                    <Td>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "gray.900" }} _active={{ bg: "gray.900" }}>
                                Select
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Modify</MenuItem>
                                <MenuItem>Disable</MenuItem>
                            </MenuList>
                        </Menu>
                    </Td>
                </Tr>

            ))}
        </>
    )
}

export default UserRow
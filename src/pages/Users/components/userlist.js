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
            {props.userdetails.map((item, i) => (
                <Tr key={item.Attributes[0].Value}>
                    <Td>{i + 1}</Td>
                    <Td>{item.Attributes[3].Value}</Td>
                    <Td>{item.Attributes.image}</Td>
                    <Td>{item.Attributes[4].Value}</Td>
                    <Td color={item.Attributes[1].Value === 'true' ? "orange" : "red"}>{item.Attributes[1].Value === 'true' ? "Active" : "Disabled"}</Td>
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
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
import { enableUser, disableUser } from "../../../services/Users";


function UserRow(props) {

    function enableUserStatus(id, index) {
        enableUser(id).then((res) => console.log(res)).catch((err) => console.log(err))
        let temp = [...props.userdetails]
        temp[index].Enabled = true
        props.setUserDetails(temp)
    }

    function disbaleUserStatus(id, index) {
        disableUser(id).then((res) => console.log(res)).catch((err) => console.log(err))
        let temp = [...props.userdetails]
        temp[index].Enabled = false
        props.setUserDetails(temp)
    }

    return (
        <>
            {props.userdetails.map((item, i) => (
                <Tr key={item.Attributes[0].Value}>
                    <Td>{i + 1}</Td>
                    <Td>{item.Attributes[3].Value}</Td>
                    <Td>{item.Attributes.image}</Td>
                    <Td>{item.Attributes[4].Value}</Td>
                    <Td color={item.Enabled ? "orange" : "red"}>{item.Enabled ? "Active" : "Disabled"}</Td>
                    <Td>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaAngleDown />} bgColor="gray.700" color="blue.50" _hover={{ bg: "gray.900" }} _active={{ bg: "gray.900" }}>
                                Select
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => enableUserStatus(item.Attributes[4].Value, i)}>Enable</MenuItem>
                                <MenuItem onClick={() => disbaleUserStatus(item.Username, i)}>Disable</MenuItem>
                                {/* <MenuItem>Delete</MenuItem> */}
                            </MenuList>
                        </Menu>
                    </Td>
                </Tr>

            )
            )}
        </>
    )
}

export default UserRow
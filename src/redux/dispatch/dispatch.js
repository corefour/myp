// general FUNCTIONS
export function set_userData(new_state) {
    return {
        type: "SET_USERDATA",
        data: new_state
    }
}

export function set_roles(new_state) {
    return {
        type: "SET_ROLE",
        data: new_state
    }
}
import { genralstate } from "../gvariable";

const GenralReducer = (state = genralstate, action) => {
    switch (action.type) {
        case "SET_USERDATA":
            state = {
                ...state,
                profile: action.data
            }
            break
    }

    return state
}

export default GenralReducer

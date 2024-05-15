import { Box, Button, Stack, Typography } from "@mui/material"
import { useReducer } from "react"
import UIInput from "../../../../ui-components/input/input"

interface Attribute {
    id: number,
    title: string,
    description: string,
    num: number
}

interface State {
    attributes: Attribute[]
}

interface addAction {
    type: "add",
}

interface removeAction {
    type: "remove",
    id: number
}

interface editAction {
    type: "edit",
    id: number,
    key: string,
    value: string | number
}

type Action = addAction | removeAction | editAction

const initialState: State = {
    attributes: [{
        id: 0,
        title: "",
        description: "",
        num: 1
    }]
}

const reducer = (state: State, action: Action) => {
    switch(action.type){
        case "add":
            const allFilled = state.attributes.every(
                attr => attr.title && attr.description && attr.num
            );
            if(allFilled) {
                return {
                    ...state,
                    attributes: [
                        ...state.attributes,
                        {
                            id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
                            title: "",
                            description: "",
                            num: 1
                        }
                    ]
                }
            }
            return state
        case "remove":
            return state.filter((att: Attribute) => att.id !== action.id)
        case "edit":
            return {
                ...state,
                attributes: state.attributes.map((att: Attribute) => {
                    if(att.id === action.id) {
                        return {
                            ...att,
                            [action.key]: action.value
                        }
                    }
                    return att
                })
            }
        default:
            return "Not Working"
    }
}

const Attributes: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateAttribute = (index: number, key: string, value: string | number) => {
        dispatch({
            type: "edit",
            id: index,
            key,
            value
        })
        console.log(state.attributes);
    }
    const addAttribute = () => {
        console.log(state.attributes);
        dispatch({
            type: "add",
        })
    }

    const deleteAttribute = (id: number) => {
        dispatch({
            type: "remove",
            id
        })
    }

    return (
        <Box>
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
            {state.attributes ? state.attributes.map((attribute: Attribute, index: number) => {
                return (
                    <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={index}>                            
                        <UIInput updateValue={(e) => updateAttribute(index, "title", e)} placeholder="Title" />
                        <UIInput updateValue={(e) => updateAttribute(index, "description", e)} placeholder="Description" />
                        <UIInput type="number" fullWidth={false} updateValue={(e) => updateAttribute(index, "num", e)} placeholder="Sequence" defaultValue={attribute.num} /> 
                        {state.attributes.length > 1 && (<Button variant="contained" onClick={() => deleteAttribute(attribute.id)}>Delete</Button>)}                        
                    </Stack>
                )
            }): console.log(state.attributes)}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addAttribute}
            >Add Attribute</Button>
        </Box>
    )
}

export default Attributes
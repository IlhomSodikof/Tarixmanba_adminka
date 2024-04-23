import { Box, Button, Stack, Typography } from "@mui/material"
import UIInput from "../../../ui-components/input/input"
import { useReducer } from "react"
// import { UITinyMCE } from "../../../ui-components/input/tinymce"

interface Content {
    id: number,
    title: string,
    textField: string,
    sequence: number
}

interface State {
    contents: Content[]
}

interface addAction {
    type: "add"
}

interface editAction {
    type: "edit",
    id: number,
    key: string,
    value: string | number
}

interface removeAction {
    type: "remove",
    id: number
}

const initialState = {
    contents: [{
        id: 0,
        title: "",
        textField: "",
        sequence: 1,
    }]
}

type Action = addAction | editAction | removeAction

const contentReducer = (state: State, action: Action) => {
    switch(action.type){
        case "add":
            const allFilled = state.contents.every(
                content => content.title && content.textField && content.sequence
            );
            if(allFilled) {
                return {
                    ...state,
                    attributes: [
                        ...state.contents,
                        {
                            id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
                            title: "",
                            textField: "",
                            sequence: 1
                        }
                    ]
                }
            }
            return state
        case "edit": 
            return {
                ...state,
                contents: state.contents.map((content: Content) => {
                    if(content.id === action.id) {
                        return {
                            ...content,
                            [action.key]: action.value
                        }
                    }
                    return content
                })
            }
        case "remove":
            return state.filter((content: Content) => content.id !== action.id)
    }
}

const Contents: React.FC = () => {
    const [state, dispatch] = useReducer(contentReducer, initialState)
    
    const updateContents = (index: number, key: string, value: string | number) => {
        dispatch({
            type: "edit",
            id: index,
            key,
            value
        })
    }

    const addContents = () => {
        dispatch({
            type: "add"
        })
    }

    return (
        <Box>
            <Typography sx={{marginTop: "20px"}}>Contents</Typography>
            {state.contents && state.contents.map((content: Content, index: number) => {
                return (
                    <Box key={content.sequence}>
                        <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                            <UIInput updateValue={(e) => updateContents(index, "title", e)} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} defaultValue={content.sequence} updateValue={(e) => updateContents(index, "sequence", e)} placeholder="Sequence" />
                        </Stack>
                        {/* <UITinyMCE
                            updateMCE={(e) => updateContents(index, "textField", e)}
                        /> */}
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addContents}
            >Add Contents</Button>
        </Box>
    )
}

export default Contents
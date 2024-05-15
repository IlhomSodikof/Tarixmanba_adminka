import { Box, Button, Stack, Typography } from "@mui/material"
import { useReducer } from "react"
import UIInput from "../../../../ui-components/input/input"
import UISelect from "../../../../ui-components/input/select"
import UIFile from "../../../../ui-components/input/file"
import useFetchGetAllDatas from "../../../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../../../utils/getFilteredList"

interface InteractiveContent {
    id: number,
    gallery: string,
    title: string,
    sequence: number,
    file: FileList | null
}

interface State {
    interactiveContents: InteractiveContent[]
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
    value: string | number | FileList | null
}

type Action = addAction | removeAction | editAction

const initialState: State = {
    interactiveContents: [{
        id: 0,
        gallery: "",
        title: "",
        sequence: 0,
        file: null
    }]
}

const reducer = (state: State, action: Action) => {
    switch(action.type){
        case "add":
            const allFilled = state.interactiveContents.every(
                interactiveContents => interactiveContents.title && interactiveContents.gallery && interactiveContents.sequence && interactiveContents.file
            );
            if(allFilled) {
                return {
                    ...state,
                    contents: [
                        ...state.interactiveContents,
                        {
                            id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
                            title: "",
                            gallery: "",
                            sequence: 1,
                            file: null
                        }
                    ]
                }
            }
            return state
        case "remove":
            return state.filter((interactiveContents: InteractiveContent) => interactiveContents.id !== action.id)
        case "edit":
            return {
                ...state,
                interactiveContents: state.interactiveContents.map((interactiveContent: InteractiveContent) => {
                    if(interactiveContent.id === action.id) {
                        return {
                            ...interactiveContent,
                            [action.key]: action.value
                        }
                    }
                    return interactiveContent
                })
            }
        default:
            return "Not Working"
    }
}

const InteractiveContents: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateInteractiveContents = (index: number, key: string, value: string | number | FileList | null) => {
        dispatch({
            type: "edit",
            id: index,
            key,
            value
        })
    }
    const addInteractiveContents = () => {
        dispatch({
            type: "add",
        })
    }

    const {data: allCategoriesList} = useFetchGetAllDatas("category")
    const allCategories = getAllFilteredLists({data: allCategoriesList})

    return (
        <Box>
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Interactive Content</Typography>
            {state.interactiveContents ? state.interactiveContents.map((interactiveContent: InteractiveContent, index: number) => {
                return (
                    <Box key={index}>
                        <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                            <UISelect options={allCategories} placeholder="" updateValue={(e) => updateInteractiveContents(index, "gallery", e)} />
                            <UIInput updateValue={(e) => updateInteractiveContents(index, "title", e)} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} defaultValue={interactiveContent.sequence} updateValue={(e) => updateInteractiveContents(index, "sequence", e)} placeholder="Sequence" />
                        </Stack>
                        <UIFile fileChange={(e: any) => e.length > 0 && updateInteractiveContents(index, "file", e[0])}/>
                    </Box>
                )
            }): console.log(state.interactiveContents)}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addInteractiveContents}
            >Add Interactive Content</Button>
        </Box>
    )
}

export default InteractiveContents
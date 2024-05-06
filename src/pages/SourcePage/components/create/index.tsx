// mui
import { Box, Button, Stack, Typography } from "@mui/material"
// react
import { useState } from "react"
// ui-components
import UISelect from "../../../../ui-components/input/select"
// import {UITinyMCE} from "../../../ui-components/input/tinymce"
import UIInput from "../../../../ui-components/input/input"
import UIFile from "../../../../ui-components/input/file"
// types
import UISwitch from "../../../../ui-components/input/switch"
import Attributes from "./Attributes"
import Contents from "./Contents"
import InteractiveContents from "./InteractiveContent"

const CreateField: React.FC = () => {
    const [category, setCategory] = useState<string>("")
    const [filterCategory, setFilterCategory] = useState<string>("")
    const [filter, setFilter] = useState<string>("")
    const [periodFilter, setPeriodFilter] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [image, setImage] = useState<FileList|null>(null)
    const [statehood, setStatehood] = useState<boolean>(true)
    const [province, setProvince] = useState<string>("")

    
    const handleSubmit = () => {
        console.log(category);
        console.log(statehood);
    }

    const getAllCategory = () => {
        
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}>Filter</Typography>
            <UISelect options={["one"]} placeholder="Select a category" updateValue={(e) => setCategory(e)} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect disabled={Boolean(category)} options={["one"]} placeholder="Select a filter category" updateValue={(e) => setFilterCategory(e)} />
                <UISelect disabled={Boolean(category) && Boolean(filterCategory)} options={["one"]} placeholder="Select a filter" updateValue={(e) => setFilter(e)} />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => setPeriodFilter(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => setImage(e)}/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            {/* <UITinyMCE updateMCE={e => setContent(e)} /> */}

            <Typography sx={{margin: "20px 0 10px"}}>Statehood</Typography>
            <UISwitch value={statehood} changeValue={(e) => setStatehood(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => setProvince(e)} />
            
            <Attributes />
            
            <Contents />
            
            <InteractiveContents />

            <Button variant="contained" onClick={handleSubmit} sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default CreateField
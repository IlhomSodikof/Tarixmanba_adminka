import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import UISelect from "../../ui-components/input/select"

const FilterCategoriesCreatePage: React.FC = () => {
    const [category, setCategory] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    const submit = () => {
        if(!title || !category) return
        console.log(title, category);
    }

    return (
        <Box>
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Select Category</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => setCategory(e)} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} fullWidth />

            <Button variant="contained" sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default FilterCategoriesCreatePage
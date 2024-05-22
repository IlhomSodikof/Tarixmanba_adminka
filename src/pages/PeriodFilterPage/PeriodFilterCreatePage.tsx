import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"

const PeriodFilterCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")

    const submit = () => {
        if(!title) return
        createData("period_filter", {title})
            .then(res => res)
            .catch(err => err)
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} fullWidth />
            <Button variant="contained" sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default PeriodFilterCreatePage
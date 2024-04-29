import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"

const PeriodFilterCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")

    const submit = () => {
        if(!title) return
        console.log(title);
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
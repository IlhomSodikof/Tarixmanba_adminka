import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"

const ProvinceCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")
    const [latitude, setLatitude] = useState<string>("")
    const [longitude, setLongitude] = useState<string>("")

    const submit = () => {
        if(!title || !latitude || !longitude) return
        createData("province", {title, latitude, longitude})
            .then(res => res)
            .catch(err => err)
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} fullWidth />
            <Stack sx={{margin: "20px 0"}}>
                <Box>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Latitude</Typography>
                    <UIInput updateValue={e => setLatitude(e)} />
                </Box>
                <Box>
                    <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Longitude</Typography>
                    <UIInput updateValue={e => setLongitude(e)} />
                </Box>
            </Stack>
            <Button variant="contained" sx={{marginTop: "10px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default ProvinceCreatePage
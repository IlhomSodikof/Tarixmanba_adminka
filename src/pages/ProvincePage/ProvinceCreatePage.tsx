import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"

const ProvinceCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState<string>(data?.title || "")
    const [latitude, setLatitude] = useState<string>(data?.latitude || "")
    const [longitude, setLongitude] = useState<string>(data?.longitude || "")
    const [active, setActive] = useState<boolean>(false)

    const submit = () => {
        setActive(true)
        if(!title || !latitude || !longitude) return

        if(isEdit) {
            updateSingleData("province", data?.id, {title, latitude, longitude})
                .then(res => {
                    navigate("/province", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }else {
            createData("province", {title, latitude, longitude})
                .then(res => {
                    navigate("/province", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} fullWidth />
            <Stack sx={{margin: "20px 0"}}>
                <Box>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Latitude</Typography>
                    <UIInput updateValue={e => setLatitude(e)} defaultValue={latitude} />
                </Box>
                <Box>
                    <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Longitude</Typography>
                    <UIInput updateValue={e => setLongitude(e)} defaultValue={longitude} />
                </Box>
            </Stack>
            <Button variant="contained" disabled={active} sx={{marginTop: "10px"}} onClick={submit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default ProvinceCreatePage
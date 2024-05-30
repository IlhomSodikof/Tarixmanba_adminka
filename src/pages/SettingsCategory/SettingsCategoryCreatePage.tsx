import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"

const SettingsCategoryCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const [title, setTitle] = useState<string>(data?.title || "")
    const [active, setActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if(!title && !isEdit) {
            return
        }
        setActive(true)

        const form = {title}

        if(isEdit) {
            updateSingleData("connection_category", data?.id, form)
                .then(res => {
                    navigate("/settings-category", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }
        else{
            createData("connection_category", form)
                .then((res) => {
                    navigate("/settings-category", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }

    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} />
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={handleSubmit}>{isEdit ? "Update" : "Create"}</Button>
        </Box>
    )
}

export default SettingsCategoryCreatePage
import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"

const PeriodFilterCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState<string>(data?.title || "")
    const [active, setActive] = useState<boolean>(false)

    const submit = () => {
        if(!title) return

        setActive(true)

        if(isEdit) {
            updateSingleData("period_filter", data?.id, {title})
                .then(res => {
                    navigate("/period-filter", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }else {
            createData("period_filter", {title})
                .then(res => {
                    navigate("/period-filter", {replace: true})
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
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={submit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default PeriodFilterCreatePage
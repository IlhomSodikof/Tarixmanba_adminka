import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { useNavigate } from "react-router-dom"
import { createData } from "../../api/apiPostCalls"
import UISelect from "../../ui-components/input/select"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../utils/getFilteredList"
import { updateSingleData } from "../../api/apiUpdateCalls"

const SettingsCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()
    
    const [title, setTitle] = useState<{[x: string]: string} | null>({id: data?.connection_category, value: data?.connection_title} || null)
    const [value, setValue] = useState<string>(data?.value || "")
    const [active, setActive] = useState<boolean>(false)

    const {data: allConnectionCategory} = useFetchGetAllDatas("connection_category")

    const allCategories = getAllFilteredLists({data: allConnectionCategory})

    const submit = () => {
        if(!title) return
        setActive(true)

        const form = {
            connection_category: title?.id+"",
            value
        }

        if(isEdit) {
            updateSingleData("connection_value", data?.id, form)
                .then(res => {
                    navigate("/settings", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }else {
            createData("connection_value", form)
                .then(res => {
                    navigate("/settings", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }
    }

    return (
        <Box>
            <Stack direction={"row"} gap={2} sx={{marginBottom: "20px"}}>
                <Box sx={{width: "100%"}}>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Category</Typography>
                    <UISelect options={allCategories} defaultValue={title || {id: "", value: ""}} updateValue={(e) => setTitle(e)} placeholder="Category" />
                </Box>
                <Box sx={{width: "100%"}}>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Value</Typography>
                    <UIInput updateValue={(e) => setValue(e)} defaultValue={value} fullWidth/>
                </Box>
            </Stack>

            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={submit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default SettingsCreatePage
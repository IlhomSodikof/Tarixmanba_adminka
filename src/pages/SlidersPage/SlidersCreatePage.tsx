import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { getImageAsFile } from "../../utils/getImage"
import { updateSingleData } from "../../api/apiUpdateCalls"

const SlidersCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState<string>(data?.title || "")
    const [link, setLink] = useState<string>(data?.link || "")
    const [file, setFile] = useState<FileList | null>(data?.file || null)
    const [active, setActive] = useState<boolean>(false)

    const submit = async () => {
        if(!title || !link || !file) return
        setActive(true)

        const form = new FormData()
        form.append("title", title)
        form.append("link", link)
        if(isEdit){
            const result = await getImageAsFile(data?.file, "file")
            form.append("file", result)
        }
        else {
            form.append("file", file[0])
        }
        if(isEdit) {
            
            updateSingleData("sliders", data?.id, form, true)
                .then(res => {
                    navigate("/sliders", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }else {
            createData("sliders", form, true)
                .then(res => {
                    navigate("/sliders", {replace: true})
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
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
                    <UIInput defaultValue={title} updateValue={(e) => setTitle(e)} fullWidth />
                </Box>
                <Box sx={{width: "100%"}}>
                    <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Link</Typography>
                    <UIInput defaultValue={link} updateValue={(e) => setLink(e)} fullWidth/>
                </Box>

            </Stack>

            <UIFile fileChange={(e) => setFile(e)} defaultFile={data?.file} />
            
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={submit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default SlidersCreatePage
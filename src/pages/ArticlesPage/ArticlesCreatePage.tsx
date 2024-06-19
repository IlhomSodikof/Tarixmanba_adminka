import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
// import { UITinyMCE } from "../../ui-components/input/tinymce"
import UIFile from "../../ui-components/input/file"
import { updateSingleData } from "../../api/apiUpdateCalls"
import { getImageAsFile } from "../../utils/getImage"

const ArticlesCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit = false, data}) => {
    const [title, setTitle] = useState<string>(data?.title || "")
    const [content, setContent] = useState<string>(data?.content || "")
    const [file, setFile] = useState<FileList | null>(data?.file || null)
    const [active, setActive] = useState<boolean>(false)

    console.log(data);

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if(!title || !file && !isEdit) {
            return
        }
        setActive(true)

        const form = new FormData()
        form.append("title", title)
        form.append("content", content)
        if(!isEdit) file && form.append("file", file[0])
        else {
            const result = await getImageAsFile(data?.file, "file")
            form.append("file", result)
        }

        
        if(isEdit) {
            for (var pair of form.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
            updateSingleData("news", data?.id, form, true)
                .then(res => {
                    navigate("/articles", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }
        else{
            createData("news", form, true)
                .then((res) => {
                    navigate("/articles", {replace: true})
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
            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            {/* <img src={`http://161.35.219.128:8001${data?.file}`} alt="" width="100%" height="100%" /> */}
            {/* <UITinyMCE
                updateMCE={(e) => setContent(e)}
            /> */}
            <UIInput updateValue={(e) => setContent(e)} defaultValue={content} />
            <Typography sx={{margin: "20px 0 10px"}}>File</Typography>
            <UIFile fileChange={(e) => setFile(e)} defaultFile={data?.file} />
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={handleSubmit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default ArticlesCreatePage
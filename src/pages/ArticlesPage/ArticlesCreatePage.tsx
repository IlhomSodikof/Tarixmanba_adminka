import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { UITinyMCE } from "../../ui-components/input/tinymce"
import UIFile from "../../ui-components/input/file"

const ArticlesCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [file, setFile] = useState<FileList | null>(null)
    const [active, setActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!title) return
        setActive(true)
        createData("articles", {title, content, file})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                setActive(false)
                navigate("/articles", {replace: true})
            })
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />
            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UITinyMCE
                updateMCE={(e) => setContent(e)}
            />
            <Typography sx={{margin: "20px 0 10px"}}>File</Typography>
            <UIFile fileChange={(e) => setFile(e)} />
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={handleSubmit}>Create</Button>
        </Box>
    )
}

export default ArticlesCreatePage
import { Box, Typography, Button } from "@mui/material"
import UISelect from "../../ui-components/input/select"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"

const LibrariesCreatePage: React.FC = () => {
    const [libraryCategory, setLibraryCategory] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [year, setYear] = useState<number>()
    const [country, setCountry] = useState<string>("")
    const [language, setLanguage] = useState<string>("")
    const [image, setImage] = useState<FileList | null>(null)
    const [file, setFile] = useState<FileList | null>(null)

    const handleSubmit = () => {
        if(!libraryCategory || !title || !author || !type || !year || !country || !language || !image || !file) return
        console.log(libraryCategory, title, author, type, year, country, language, image, file);
    }

    return (
        <Box>
            <Typography sx={{margin: "5px 0"}}><span style={{color: "red"}}>*</span> Select Library Category</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={e => setLibraryCategory(e)}/>

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Author</Typography>
            <UIInput updateValue={(e) => setAuthor(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Type</Typography>
            <UIInput updateValue={(e) => setType(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Year</Typography>
            <UIInput updateValue={(e) => setYear(e)} type="number" />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Country</Typography>
            <UIInput updateValue={(e) => setCountry(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Language</Typography>
            <UIInput updateValue={(e) => setLanguage(e)} />

            <Typography sx={{margin: "15px 0 5px"}}>Click to upload an image</Typography>
            <UIFile fileChange={e => setImage(e)} />

            <Typography sx={{margin: "15px 0 5px"}}>Click to upload an file</Typography>
            <UIFile fileChange={e => setFile(e)} />

            <Button onClick={handleSubmit} variant="contained" sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default LibrariesCreatePage
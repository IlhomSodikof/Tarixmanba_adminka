import { Box, Typography, Button } from "@mui/material"
import UISelect from "../../ui-components/input/select"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import Loading from "../../components/loading"
import { createData } from "../../api/apiPostCalls"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../utils/getFilteredList"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"
import { getImageAsFile } from "../../utils/getImage"

interface props {
    isEdit?: boolean,
    data?: any
}

const LibrariesCreatePage: React.FC<props> = ({isEdit, data}) => {
    const [libraryCategory, setLibraryCategory] = useState<{id: string, value: string} | null>({id: data?.category, value: data?.cat_library} || null)
    const [title, setTitle] = useState<string>(data?.title || "")
    const [author, setAuthor] = useState<string>(data?.author || "")
    const [type, setType] = useState<string>(data?.type || "")
    const [year, setYear] = useState<number>(data?.year)
    const [country, setCountry] = useState<string>(data?.country || "")
    const [language, setLanguage] = useState<string>(data?.language || "")
    const [image, setImage] = useState<FileList | null>(data?.image || null)
    const [file, setFile] = useState<FileList | null>(data?.file || null)
    const [active, setActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const {data: allLibraryCategory, loading} = useFetchGetAllDatas("library_category")

    const allLists = getAllFilteredLists({data: allLibraryCategory})

    const handleSubmit = async () => {
        if(!libraryCategory || !title || !author || !type || !year || !country || !language) {
            return
        }
        setActive(true)
        
        const form = new FormData()
        form.append("title", title)
        form.append("category", libraryCategory?.id)
        form.append("author", author)
        form.append("type", type)
        form.append("year", year+"")
        form.append("country", country)
        form.append("language", language)
        form.append("author", author)
        
        if(isEdit) {
            const resultImage = await getImageAsFile(data?.image, "image")
            form.append("image", resultImage)
            
            const resultFile = await getImageAsFile(data?.file, "file")
            form.append("file", resultFile)
            
            for (var pair of form.entries()) {
                console.log(pair[0]+ ', ' + JSON.stringify(pair[1])); 
            }            
            
            updateSingleData("library", data?.id, form, true)
                .then(res => {
                    navigate("/libraries", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }else {
            image && form.append("image", image[0])
            file && form.append("file", file[0])
            createData("library", form, true)
                .then(res => {
                    navigate("/libraries", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }

    }

    return (
        <Box>
            {loading && <Loading />}
            {!loading && (
                <Box>
                    <Typography sx={{margin: "5px 0"}}><span style={{color: "red"}}>*</span> Select Library Category</Typography>
                    <UISelect options={allLists} placeholder="" defaultValue={libraryCategory || {id: "", value: ""}} updateValue={e => {
                        const libCat = { id: e.id, value: e.value }
                        setLibraryCategory(libCat)
                    }}/>

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
                    <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Author</Typography>
                    <UIInput updateValue={(e) => setAuthor(e)} defaultValue={author} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Type</Typography>
                    <UIInput updateValue={(e) => setType(e)} defaultValue={type} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Year</Typography>
                    <UIInput updateValue={(e) => setYear(Number(e))} type="number" defaultValue={year} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Country</Typography>
                    <UIInput updateValue={(e) => setCountry(e)} defaultValue={country} />

                    <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Language</Typography>
                    <UIInput updateValue={(e) => setLanguage(e)} defaultValue={language} />

                    <Typography sx={{margin: "15px 0 5px"}}>Click to upload an image</Typography>
                    <UIFile fileChange={e => setImage(e)} id="1" defaultFile={data?.file} />

                    <Typography sx={{margin: "15px 0 5px"}}>Click to upload an file</Typography>
                    <UIFile fileChange={e => setFile(e)} id="2" defaultFile={data?.file} />

                    <Button onClick={handleSubmit} disabled={active} variant="contained" sx={{marginTop: "20px"}}>{isEdit ? "Edit" : "Create"}</Button>
                </Box>
                    
            )}
        </Box>
    )
}

export default LibrariesCreatePage
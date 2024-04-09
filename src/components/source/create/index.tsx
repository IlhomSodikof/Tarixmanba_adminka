// mui
import { Box, Button, Stack, Typography } from "@mui/material"
// react
import { useState } from "react"
// ui-components
import UISelect, { UITinyMCE } from "../../../ui-components/input"
import UIInput from "../../../ui-components/input/input"
import UIFile from "../../../ui-components/input/file"
// types
import { CreateSourceAttributes, CreateSourceContents, CreateSourceInteractives } from "../../../types/source"

const CreateField: React.FC = () => {
    const [category, setCategory] = useState<string>("")
    const [filterCategory, setFilterCategory] = useState<string>("")
    const [filter, setFilter] = useState<string>("")
    const [periodFilter, setPeriodFilter] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [image, setImage] = useState<FileList|null>(null)
    const [content, setContent] = useState<string>("")
    const [province, setProvince] = useState<string>("")

    const [attributes, setAttributes] = useState<CreateSourceAttributes[]>([{
        title: "",
        description: "",
        num: 1
    }])
    const updateAttribute = (index: number, key: string, value: string | number) => {
        const updatedAttribute: CreateSourceAttributes[] = [...attributes]
        updatedAttribute[index] = {
            ...updatedAttribute[index],
            [key]: value    
        }
        setAttributes(updatedAttribute)
    }
    const addAttribute = () => {
        setAttributes([
            ...attributes,
            {
                title: "",
                description: "",
                num: 1
            }
        ])
    }

    const [contents, setContents] = useState<CreateSourceContents[]>([{
        title: "",
        sequence: 1,
        textField: ""
    }])
    const updateContents = (index: number, key: string, value: string | number) => {
        const updatedContents: CreateSourceContents[] = [...contents]
        updatedContents[index] = {
            ...updatedContents[index],
            [key]: value    
        }
        setContents(updatedContents)
    }

    const addContents = () => {
        setContents([
            ...contents,
            {
                title: "",
                sequence: 1,
                textField: ""
            }
        ])
    }

    const [interactives, setInteractives] = useState<CreateSourceInteractives[]>([{
        gallery: "",
        title: "",
        sequence: 1,
        file: null
    }])

    const updateInteractives = (index: number, key: string, value: string | number | FileList | null) => {
        const updatedInteractives: CreateSourceInteractives[] = [...interactives]
        updatedInteractives[index] = {
            ...updatedInteractives[index],
            [key]: value    
        }
        setInteractives(updatedInteractives)
    }

    const addInteractives = () => {
        setInteractives([
            ...interactives,
            {
                gallery: "",
                title: "",
                sequence: 1,
                file: null
            }
        ])
    }

    const handleSubmit = () => {
        // const formData = new FormData()
        console.log(category, filterCategory, filter, periodFilter, title, image, content, province, attributes, contents, interactives);
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}>Filter</Typography>
            <UISelect options={["one"]} placeholder="Select a category" updateValue={(e) => setCategory(e)} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect disabled={Boolean(category)} options={["one"]} placeholder="Select a filter category" updateValue={(e) => setFilterCategory(e)} />
                <UISelect disabled={Boolean(category) && Boolean(filterCategory)} options={["one"]} placeholder="Select a filter" updateValue={(e) => setFilter(e)} />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => setPeriodFilter(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => setImage(e)}/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UITinyMCE updateMCE={e => setContent(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => setProvince(e)} />
            
            <Box>
                <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
                {attributes.map((attribute: CreateSourceAttributes, index: number) => {
                    return (
                        <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={attribute.title}>
                            <UIInput updateValue={(e) => updateAttribute(index, "title", e)} placeholder="Title" />
                            <UIInput updateValue={(e) => updateAttribute(index, "description", e)} placeholder="Description" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => updateAttribute(index, "num", e)} placeholder="Sequence" defaultValue={attribute.num} /> 
                        </Stack>
                    )
                })}
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginTop: "10px"}}
                    onClick={addAttribute}
                >Add Attribute</Button>
            </Box>
            
            <Box>
                <Typography sx={{marginTop: "20px"}}>Contents</Typography>
                {contents.map((cont: CreateSourceContents, index: number) => {
                    return (
                        <Box key={cont.sequence}>
                            <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                                <UIInput updateValue={(e) => updateContents(index, "title", e)} placeholder="Title" />
                                <UIInput type="number" fullWidth={false} defaultValue={cont.sequence} updateValue={(e) => updateContents(index, "sequence", e)} placeholder="Sequence" />
                            </Stack>
                            <UITinyMCE
                                updateMCE={(e) => updateContents(index, "textField", e)}
                            />
                        </Box>
                    )
                })}
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginTop: "10px"}}
                    onClick={addContents}
                >Add Contents</Button>
            </Box>
            
            <Box sx={{margin: "20px 0"}}>
                <Typography>Interive Content</Typography>
                {interactives.map((inter: CreateSourceInteractives, index: number) => {
                    return (
                        <Box>
                            <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                                <UISelect options={["one"]} placeholder="" updateValue={(e) => updateInteractives(index, "gallery", e)} />
                                <UIInput updateValue={(e) => updateInteractives(index, "title", e)} placeholder="Title" />
                                <UIInput type="number" fullWidth={false} defaultValue={inter.sequence} updateValue={(e) => updateInteractives(index, "sequence", e)} placeholder="Sequence" />
                            </Stack>
                            <UIFile fileChange={(e) => updateInteractives(index, "file", e)}/>
                        </Box>
                    )
                })}
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginTop: "10px"}}
                    onClick={addInteractives}
                >Add Interactive</Button>
            </Box>

            <Button variant="contained" onClick={handleSubmit}>Create</Button>
        </Box>
    )
}

export default CreateField
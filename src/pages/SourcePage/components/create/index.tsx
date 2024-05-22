// mui
import { Box, Button, Stack, Typography } from "@mui/material"
// react
import { useEffect, useState } from "react"
// ui-components
import UISelect from "../../../../ui-components/input/select"
// import {UITinyMCE} from "../../../ui-components/input/tinymce"
import UIInput from "../../../../ui-components/input/input"
import UIFile from "../../../../ui-components/input/file"
// types
import UISwitch from "../../../../ui-components/input/switch"
import useFetchGetAllDatas from "../../../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../../../utils/getFilteredList"
import { createData } from "../../../../api/apiPostCalls"

const CreateField: React.FC = () => {
    const interiveType = [
        {id: "0", value: "Gallery"}, 
        {id: "1", value: "Audio"}, 
        {id: "2", value: "File"}, 
        {id: "3", value: "Virtual_reality"},
        {id: "4", value: "Video"},
        {id: "5", value: "Location"},
    ]
    const [interiveInputType, setInteriveInputType] = useState<"file" | "link" | "location" | null>(null)
    const [category, setCategory] = useState<{[x: string]: string} | null>(null)
    const [filterCategory, setFilterCategory] = useState<{[x: string]: string} | null>(null)
    const [filter, setFilter] = useState<{[x: string]: string} | null>(null)
    const [periodFilter, setPeriodFilter] = useState<{[x: string]: string} | null>(null)
    const [title, setTitle] = useState<string>("")
    const [image, setImage] = useState<FileList|null>(null)
    const [content, setContent] = useState<string>("")
    const [statehood, setStatehood] = useState<boolean>(true)
    const [province, setProvince] = useState<{[x: string]: string} | null>(null)

    const [attributes, setAttributes] = useState<{[x: string]: string | number}[]>([
        {id: Date.now(), attributes_title: "", attributes_description: "", sequence: 1}
    ])
    const [contents, setContents] = useState<{[x: string]: string | number}[]>([{id: Date.now(), title: "", sequence: 1, para: ""}])
    const [interactiveContent, setInteractiveContent] = useState<{[x: string]: string | number | FileList | null}[]>([
        {
            id: Date.now(), item: "", title: "", sequence: 1, file: null, link: ""}])

    const addAttribute = () => {
        let result = [...attributes, {id: Date.now(), attributes_title: "", attributes_description: "", sequence: 1}]
        setAttributes(result)
    }

    const editAttribute = (id: number, key: string, value: string | number) => {
        const result = [...attributes]
        result[id] = {
            ...attributes[id],
            [key]: value
        }
        setAttributes(result)
    }

    const deleteAttribute = (id: number) => {
        const arr = [...attributes]
        arr.splice(id, 1)
        setAttributes(arr)
    }

    const addContent = () => {
        let result = [...contents, {id: Date.now(), title: "", sequence: 1, para: ""}]
        setContents(result)
    }

    const editContent = (id: number, key: string, value: string | number) => {
        const result = [...contents]
        result[id] = {
            ...contents[id],
            [key]: value
        }
        setContents(result)
    }

    const deleteContent = (id: number) => {
        const arr = [...contents]
        arr.splice(id, 1)
        setContents(arr)
    }

    const addInteractiveContent = () => {
        let result = [...interactiveContent, {id: Date.now(), item: "", title: "", sequence: 1, file: null, link: ""}]
        setInteractiveContent(result)
    }

    const editInteractiveContent = (id: number, key: string, value: string | number | FileList | null) => {
        const result = [...interactiveContent]
        result[id] = {
            ...interactiveContent[id],
            [key]: value
        }
        setInteractiveContent(result)
        const itemType: {[x: string]: "file" | "link" | "location" | null} = {
            "Gallery": "file",
            "Audio": "file",
            "File": "file",
            "Virtual_reality": "file",
            "Video": "link",
            "Location": "location"
        }
        if(key==="item") setInteriveInputType(itemType[key])
    }

    const deleteInteractiveContent = (id: number) => {
        const arr = [...interactiveContent]
        arr.splice(id, 1)
        setInteractiveContent(arr)
    }

    const [filterCategoryList, setFilterCategoryList] = useState<any[]>([])
    const [filterList, setFilterList] = useState<any[]>([])
    
    const {data: allCategoriesList} = useFetchGetAllDatas("category")
    const {data: allPeriodFilterList} = useFetchGetAllDatas("period_filter")
    const {data: allProvinceList} = useFetchGetAllDatas("province")

    useEffect(() => {
        allCategoriesList?.map(list => {
            if(list.id === category?.id) {
                setFilterCategoryList(list.categories)
            }
        })
    }, [category])

    useEffect(() => {
        filterCategoryList?.map(list => {
            if(filterCategory && list.id === filterCategory.id) {
                setFilterList(list.filters_category)
            }
        })
    }, [filterCategory])

    const allCategories = getAllFilteredLists({data: allCategoriesList})
    const allFilterCategoriesList = getAllFilteredLists({data: filterCategoryList})
    const allFiltersList = getAllFilteredLists({data: filterList})
    const allPeriodFilter = getAllFilteredLists({data: allPeriodFilterList})
    const allProvince = getAllFilteredLists({data: allProvinceList})

    const handleSubmit = () => {
        if(!category || !filterCategory || !filter || !image || !periodFilter || !title) {
            return
        }
        const form = new FormData()
        form.append("category", category?.id)
        form.append("filterCategory", filterCategory?.id)
        form.append("filter", filter?.id)
        form.append("periodFilter", periodFilter?.id)
        form.append("title", title)
        form.append("image", image[0])
        form.append("content", content)
        form.append("statehood", statehood.toString())
        form.append("province", province?.id + "")
        form.append("attributes", JSON.stringify(attributes))
        form.append("contents", JSON.stringify(contents))
        form.append("interive", JSON.stringify(interactiveContent))

        createData("resource", form, true)
            .then(res => res)
            .catch(err => err)
    }
    
    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}>Filter</Typography>
            <UISelect options={allCategories} placeholder="Select a category" updateValue={(e) => {
                setCategory(e)
                setFilterCategory(null)
                setFilter(null)
            }} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect disabled={Boolean(category)} options={allFilterCategoriesList} placeholder="Select a filter category" updateValue={(e) => {
                    setFilterCategory(e)
                    setFilter(null)
                }} />
                <UISelect disabled={Boolean(category) && Boolean(filterCategory)} options={allFiltersList} placeholder="Select a filter" updateValue={(e) => setFilter(e)} />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect options={allPeriodFilter} placeholder="" updateValue={(e) => setPeriodFilter(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => setImage(e)}/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UIInput updateValue={(e) => setContent(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Statehood</Typography>
            <UISwitch value={statehood} changeValue={(e) => setStatehood(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={allProvince} placeholder="" updateValue={(e) => setProvince(e)} />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
            {attributes.map((attribute: any, id: number) => {
                return (
                    <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={attribute.id}>                            
                        <UIInput updateValue={(e) => editAttribute(id, "attributes_title", e)} defaultValue={attribute.attributes_title} placeholder="Title" />
                        <UIInput updateValue={(e) => editAttribute(id, "attributes_description", e)} defaultValue={attribute.attributes_description} placeholder="Description" />
                        <UIInput type="number" fullWidth={false} updateValue={(e) => editAttribute(id, "sequence", e)} placeholder="Sequence" defaultValue={attribute.sequence} /> 
                        {attributes.length > 1 && (<Button variant="contained" onClick={() => deleteAttribute(id)}>Delete</Button>)}                        
                    </Stack>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addAttribute}
            >Add Attribute</Button>

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Contents</Typography>
            {contents.map((attribute: any, id: number) => {
                return (
                    <Box key={attribute.id}>
                        <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}}>                            
                            <UIInput updateValue={(e) => editContent(id, "title", e)} defaultValue={attribute.title} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => editContent(id, "sequence", e)} placeholder="Sequence" defaultValue={attribute.sequence} /> 
                        </Stack>
                        <UIInput updateValue={(e) => editContent(id, "para", e)} defaultValue={attribute.para} placeholder="" />
                        {contents.length > 1 && (<Button variant="contained" onClick={() => deleteContent(id)}>Delete</Button>)}                        
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addContent}
            >Add Content</Button>

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Interactive Content</Typography>
            {interactiveContent.map((interive: any, id: number) => {
                return (
                    <Box key={interive.id}>
                        <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}}>  
                            <UISelect options={interiveType} placeholder="Select type" updateValue={(e) => editInteractiveContent(id, "item", e.value)} />
                            <UIInput updateValue={(e) => editInteractiveContent(id, "title", e)} defaultValue={interive.title} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => editInteractiveContent(id, "sequence", e)} placeholder="Sequence" defaultValue={interive.sequence} /> 
                            {interiveInputType === "file" && (<UIFile fileChange={(e) => editInteractiveContent(id, "file", e)} />)}
                        </Stack>
                        {interactiveContent.length > 1 && (<Button variant="contained" onClick={() => deleteInteractiveContent(id)}>Delete</Button>)}                        
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addInteractiveContent}
            >Add Interactive Content</Button>

            <Button variant="contained" onClick={handleSubmit} sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default CreateField
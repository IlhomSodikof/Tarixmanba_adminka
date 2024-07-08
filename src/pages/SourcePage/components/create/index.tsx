// mui
import { Alert, Box, Button, Snackbar, Stack, Typography } from "@mui/material"
// react
import { useEffect, useState } from "react"
// ui-components
import UISelect from "../../../../ui-components/input/select"
import {UITinyMCE} from "../../../../ui-components/input/tinymce"
import UIInput from "../../../../ui-components/input/input"
import UIFile from "../../../../ui-components/input/file"
// types
import UISwitch from "../../../../ui-components/input/switch"
import useFetchGetAllDatas from "../../../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../../../utils/getFilteredList"
import { createData } from "../../../../api/apiPostCalls"
import { divideToLists } from "../../../../utils/divideToLists"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../../../api/apiUpdateCalls"
import { getImageAsFile } from "../../../../utils/getImage"
import { ImageToBase64 } from "../../../../utils/imageToBase64"
import UIAnotherSelect from "../../../../ui-components/input/anotherInput"

interface IResult {
    category: string,
    filter_category: string,
    filter_list: string[],
    period_filter: string,
    title: string,
    image: string | null,
    content: string,
    statehood: boolean,
    province: string,
    attributes_title_list: any[],
    attributes_description_list: any[],
    contents_title_list: any[],
    contents_description_list: any[],
    galleries: {[x: string]: string}[],
    files: {[x: string]: string}[],
    audios: {[x: string]: string}[],
    virtual_realities: {[x: string]: string}[],
    videos: {[x: string]: string}[],
    locations: {[x: string]: string}[]
}

const CreateField: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const interiveType = [
        {id: "0", value: "Gallery"}, 
        {id: "1", value: "Audio"}, 
        {id: "2", value: "File"}, 
        {id: "3", value: "Virtual_reality"},
        {id: "4", value: "Video"},
        {id: "5", value: "Location"},
    ]

    const itemType: {[x: string]: "file" | "link" | "location"} = {
        "Gallery": "file",
        "Audio": "file",
        "File": "file",
        "Virtual_reality": "file",
        "Video": "link",
        "Location": "location"
    }

    const [category, setCategory] = useState<{[x: string]: string}>({id: data?.category, value: data?.cat_name})
    const [filterCategory, setFilterCategory] = useState<{[x: string]: string}>({id: data?.filter_category, value: data?.filter_category_name})
    const [filter, setFilter] = useState<{[x: string]: string}[]>(data?.filters && data?.filters_name && [{id: data?.filters, value: data?.filters_name}] || [])
    const [periodFilter, setPeriodFilter] = useState<{[x: string]: string}>({id: data?.period_filter, value: data?.period_filter_name})
    const [title, setTitle] = useState<string>(data?.title || "")
    const [image, setImage] = useState<File | null>(null)
    const [content, setContent] = useState<string>(data?.content || "")
    const [statehood, setStatehood] = useState<boolean>(data?.statehood || false)
    const [province, setProvince] = useState<{[x: string]: string}>({id: data?.province, value: data?.province_name})

    const [attributes, setAttributes] = useState<{[x: string]: string | number}[]>(data?.attributes_list || [{id: Date.now(), attributes_title: "", attributes_description: "", sequence: 1}])
    const [contents, setContents] = useState<{[x: string]: string | number}[]>(data?.contents_list || [{id: Date.now(), contents_title: "", sequence: 1, contents_description: ""}])
    const [interactiveContent, setInteractiveContent] = useState<{[x: string]: string| null}[]>(data?.interive_list || [{
        id: Date.now().toString(), 
        interive_item: "file", 
        interive_status: "Gallery",
        interive_title: "", 
        interive_sequence: 1, 
        interive_file: null, 
        interive_link: null, 
        interive_latitude: null, 
        interive_longitude: null
    }])

    const [error, setError] = useState<{[x:string]: string}>({})
    const [open, setOpen] = useState<boolean>(false)

    const [fillError, setFillError] = useState<string>("")

    useEffect(() => {
        async function fetchImage() {
            const res = await getImageAsFile(data?.image, data?.image)
            setImage(res)
        }
        fetchImage()
    }, [data])

    const [active, setActive] = useState<boolean>(false)

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
        let result = [...contents, {id: Date.now(), contents_title: "", sequence: 1, contents_description: ""}]
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
        let result = [...interactiveContent, {
            id: Date.now().toString(), 
            interive_item: "file", 
            interive_status: "Gallery",
            interive_title: "", 
            interive_sequence: "", 
            interive_file: null, 
            interive_link: null, 
            interive_latitude: null, 
            interive_longitude: null
        }]
        setInteractiveContent(result)
    }

    const editInteractiveContent = (id: number, key: string, value: string | null | FileList) => {
        const result = [...interactiveContent]

        if(key==="interive_file" && value instanceof FileList){
            // if(typeof value !== FileList) return
            const reader: FileReader = new FileReader();
            reader.onloadend = () => {
                result[id] = {
                    ...interactiveContent[id],
                    [key]: reader.result as string
                }
            };
            reader.readAsDataURL(value[0]);
        }

        if(key === "interive_item" && typeof value === "string") {
            result[id] = {
                ...interactiveContent[id],
                [key]: itemType[value],
                "interive_status": value
            }
        }else {
            if(typeof value === "string") {
                result[id] = {
                    ...interactiveContent[id],
                    [key]: value
                }
            }
        }
        setInteractiveContent(result)
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

    const handleSubmit = async () => {
        if(!title || !content) {
            setFillError("Please fill all the required fields")
            return
        }

        setActive(true)

        const attributesTitles = divideToLists({data: attributes, key: "attributes_title"})
        const attributesDescriptions = divideToLists({data: attributes, key: "attributes_description"})
        const contentTitles = divideToLists({data: contents, key: "contents_title"})
        const contentDescriptions = divideToLists({data: contents, key: "contents_description"})

        const result: IResult = {
            category: category?.id,
            filter_category: filterCategory?.id,
            filter_list: [],
            period_filter: periodFilter?.id,
            title,
            image: null,
            content,
            statehood,
            province: province?.id+"",
            attributes_title_list: attributesTitles,
            attributes_description_list: attributesDescriptions,
            contents_title_list: contentTitles,
            contents_description_list: contentDescriptions,
            galleries: [],
            files: [],
            audios: [],
            virtual_realities: [],
            videos: [],
            locations: []
        }

        filter.map(fil => {
            result.filter_list.
            push(fil?.id)
        })

        const statusType: {[x: string]: "galleries" | "audios" | "files" | "virtual_realities" | "videos" | "locations"} = {
            "Gallery": "galleries",
            "Audio": "audios",
            "File": "files",
            "Virtual_reality": "virtual_realities",
            "Video": "videos",
            "Location": "locations"
        }

        interactiveContent.map((interive: {[x: string]: string | null}) => {
            if(interive.interive_status === "Gallery" || interive.interive_status === "Audio" || interive.interive_status === "File") {
                result[statusType[interive.interive_status]].push({
                    id: result.galleries.length + 1 + "",
                    title: interive.interive_title || "",
                    file: interive.interive_file || ""
                })
            }
            if(interive.interive_status === "Video") {
                result[statusType[interive.interive_status]].push({
                    id: result.galleries.length + 1 + "",
                    title: interive.interive_title || "",
                    link: interive.interive_link || ""
                })
            }
            if(interive.interive_status === "Location") {
                result[statusType[interive.interive_status]].push({
                    id: result.galleries.length + 1 + "",
                    title: interive.interive_title || "",
                    latitude: interive.interive_latitude || "",
                    longitude: interive.interive_longitude || "",
                })
            }
        })

        // if(interiveFiles.length > 0) result.interive_file_list = interiveFiles

        if(isEdit) {
            result.image = image && await ImageToBase64(image)
            
            updateSingleData("resource", data?.id, result)
                .then(res => {
                    console.log(result);
                    navigate("/sources", {replace: true})
                    return res
                })
                .catch(err => {
                    setOpen(true)
                    setError(err)
                })
                .finally(() => {
                    setActive(false)
                })
        }else {
            result.image = image && await ImageToBase64(image)
            console.log(result, interactiveContent)

            createData("resource", result)
                .then(res => {
                    navigate("/sources", {replace: true})
                    console.log(res, result, interactiveContent)
                })
                .catch(err => {
                    setOpen(true)
                    setError(err)
                    console.log(err);
                })
                .finally(() => {
                    setActive(false)
                })
        }

    }
    
    return (
        <Box>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >{error.code} - {error.code}</Alert>    
            </Snackbar>
            <Typography sx={{marginBottom: "10px"}}>Filter {category && category.value}</Typography>
            <UISelect 
                options={allCategories} 
                placeholder="Select a category" 
                defaultValue={category} 
                updateValue={(e) => {
                    setCategory(e)
                    setFilterCategory({id: "", value: ""})
                    setFilter([])
            }} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect 
                    disabled={Boolean(category)} 
                    options={allFilterCategoriesList} 
                    defaultValue={filterCategory} 
                    placeholder="Select a filter category" 
                    updateValue={(e) => {
                        setFilterCategory(e)
                        setFilter([])
                }} />

                <UIAnotherSelect 
                    disabled={false} 
                    options={allFiltersList} 
                    defaultValue={filter} 
                    placeholder="Select a filter" 
                    updateValue={(e) => setFilter(e)} 
                />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect 
                options={allPeriodFilter} 
                defaultValue={periodFilter} 
                placeholder="" 
                updateValue={(e) => setPeriodFilter(e)} 
            />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => e && setImage(e[0])} defaultFile={data?.image} id="one"/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UITinyMCE updateMCE={(e) => setContent(e)} defaultValue={content} />
            {/* <UIInput updateValue={(e) => setContent(e)} defaultValue={content} /> */}

            <Typography sx={{margin: "20px 0 10px"}}>Statehood</Typography>
            <UISwitch value={statehood} changeValue={(e) => setStatehood(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect 
                options={allProvince} 
                defaultValue={province} 
                placeholder="" 
                updateValue={(e) => setProvince(e)} 
            />

            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
            {attributes.map((attribute: any, id: number) => {
                return (
                    <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={attribute.id}>                            
                        <UIInput 
                            updateValue={(e) => editAttribute(id, "attributes_title", e)} 
                            defaultValue={attribute.attributes_title} 
                            placeholder="Title" 
                        />
                        <UIInput 
                            updateValue={(e) => editAttribute(id, "attributes_description", e)} 
                            defaultValue={attribute.attributes_description} 
                            placeholder="Description" 
                        />
                        <UIInput 
                            type="number" 
                            fullWidth={false} 
                            updateValue={(e) => editAttribute(id, "sequence", e)} 
                            placeholder="Sequence" 
                            defaultValue={attribute.sequence} 
                        /> 
                        {attributes.length > 1 && (
                            <Button variant="contained" onClick={() => deleteAttribute(id)}>Delete</Button>
                        )}                        
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
                            <UIInput 
                                updateValue={(e) => editContent(id, "contents_title", e)} 
                                defaultValue={attribute.contents_title} 
                                placeholder="Title" 
                            />
                            <UIInput 
                                type="number" 
                                fullWidth={false} 
                                updateValue={(e) => editContent(id, "sequence", e)} 
                                placeholder="Sequence" 
                                defaultValue={attribute.sequence} 
                            /> 
                        </Stack>
                        <UITinyMCE 
                            updateMCE={(e) => editContent(id, "contents_description", e)} 
                            defaultValue={attribute.contents_description} 
                        />
                        {contents.length > 1 && (
                        <Button 
                            variant="contained" 
                            sx={{margin: "10px 0 20px"}} 
                            onClick={() => deleteContent(id)}>Delete</Button>
                        )}                        
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
                        <Stack direction={"row"} gap={2} sx={{margin: "10px 0"}}>  
                            <UISelect 
                                options={interiveType} 
                                defaultValue={{id: interiveType[0].id || "0", value: interive.status || interiveType[0].value} || interiveType[0]} 
                                placeholder="Select type" 
                                updateValue={(e) => editInteractiveContent(id, "interive_item", e.value)} />
                            <UIInput 
                                updateValue={(e) => editInteractiveContent(id, "interive_title", e)} 
                                defaultValue={interive.title} 
                                placeholder="Title" 
                            />
                            <UIInput 
                                type="number" 
                                fullWidth={false} 
                                updateValue={(e) => editInteractiveContent(id, "interive_sequence", e)} 
                                placeholder="Sequence" 
                                defaultValue={interive.sequence} 
                            /> 
                        </Stack>
                        {(itemType[interive.status] === "file" || interive.interive_item === "file") && (
                            <UIFile 
                                id={id+""} 
                                defaultFile={interive.file} 
                                fileChange={(e) => editInteractiveContent(id, "interive_file", e)} 
                            />)
                        }
                        {(itemType[interive.status] === "link" || interive.interive_item === "link") && (
                            <UIInput 
                                updateValue={(e => editInteractiveContent(id, "interive_link", e))} 
                                defaultValue={interive.link} 
                                placeholder="Link" 
                            />)
                        }
                        {(itemType[interive.status] === "location" || interive.interive_item === "location") && (
                            <Stack direction={"row"} gap={2}>
                                <UIInput 
                                    updateValue={(e) => editInteractiveContent(id, "interive_latitude", e)} 
                                    defaultValue={interive.latitude} 
                                    placeholder="Latitude" 
                                />
                                <UIInput 
                                    updateValue={(e) => editInteractiveContent(id, "interive_longitude", e)} 
                                    defaultValue={interive.longitude} 
                                    placeholder="Longitude" 
                                />
                            </Stack>
                        )}
                        {interactiveContent.length > 1 && (
                            <Button 
                                variant="contained" 
                                sx={{margin: "10px 0"}} 
                                onClick={() => deleteInteractiveContent(id)}>Delete</Button>
                            )
                        }                        
                    </Box>
                )
            })}
            <Button 
                variant="outlined" 
                fullWidth 
                sx={{marginTop: "10px"}}
                onClick={addInteractiveContent}
            >Add Interactive Content</Button>

            <Button 
                variant="contained" 
                disabled={active} 
                onClick={handleSubmit} 
                sx={{marginTop: "20px"}}
            >{isEdit ? "Edit" : "Create"}</Button>
            {fillError && <Alert severity="error" sx={{margin: "20px 0"}}>{fillError}</Alert>}
        </Box>
    )
}

export default CreateField
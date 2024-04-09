import { Box, Button, Stack, Typography } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"

import UISelect, { UITinyMCE } from "../../../ui-components/input"
import UIInput from "../../../ui-components/input/input"
import UIFile from "../../../ui-components/input/file"

interface attributes {
    title: string,
    description: string,
    num: number
}

interface contents {
    title: string,
    sequence: number,
    textField: string
}

interface interactive {
    gallery: string,
    title: string,
    sequence: number,
    file: FileList | null
}

interface filterType {
    category: string,
    filterCategory: string,
    filter: string,
    periodFilter: string,
    title: string,
    content: string,
    province: string,
    attributes: attributes[],
    contents: contents[],
    interactive: interactive[],
    image: FileList | null
}

const CreateField: React.FC = () => {
    const [category, setCategory] = useState<string>("")
    
    const [filter, setFilter] = useState<filterType>({
        category: "",
        filterCategory: "",
        filter: "",
        periodFilter: "",
        title: "",
        content: "",
        province: "",
        attributes: [{
            title: "",
            description: "",
            num: 1    
        }],
        contents: [{
            title: "",
            sequence: 1,
            textField: ""
        }],
        interactive: [{
            gallery: "",
            title: "",
            sequence: 1,
            file: null
        }],
        image: null
    })

    const handleImageSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData()
        if(!e.target.files) return
        formData.append("image", e.target.files[0])
    }

    const updateFilter = (e: string | FileList | null, key: string) => {
        setFilter({
            ...filter,
            [key]: e
        })
    }

    const udpateFilterAttribute = (e: string, key: string | number) => {
        const newAttribute = filter.attributes
        const len = newAttribute.length
        console.log(filter.attributes, newAttribute[len-1]);
        newAttribute[len-1] = {
            ...newAttribute[len-1],
            [key]: e            
        }
        setFilter({
            ...filter,
            attributes: [...newAttribute]
        })
    }

    const changeAttribute = () => {
        const num = filter.attributes.length
        if(filter.attributes[num-1].title.length <= 0 || filter.attributes[num-1].description.length <= 0) return
        setFilter({
            ...filter,
            attributes: [
                ...filter.attributes,
                {
                    title: "",
                    description: "",
                    num: num+1
                }
            ]
        })
    }

    const changeContent = () => {
        console.log("smth");
    }

    // useEffect(() => {
    //     console.log(filter);
    // }, [filter])

    return (
        <Box>
            {/* {JSON.stringify(filter)} */}
            <Typography sx={{marginBottom: "10px"}}>Filter</Typography>
            <UISelect options={["one"]} placeholder="Select a category" updateValue={(e) => updateFilter(e, "category")} />
            <Stack direction={"row"} gap={5} sx={{
                margin: "20px 0"
            }}>
                <UISelect disabled={Boolean(filter.category)} options={["one"]} placeholder="Select a filter category" updateValue={(e) => updateFilter(e, "filterCategory")} />
                <UISelect disabled={Boolean(filter.category) && Boolean(filter.filterCategory)} options={["one"]} placeholder="Select a filter" updateValue={(e) => updateFilter(e, "filter")} />
            </Stack>
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select period filter</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => updateFilter(e, "periodFilter")} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => updateFilter(e, "title")} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => updateFilter(e, "image")}/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UITinyMCE updateMCE={e => updateFilter(e, "content")} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={["one"]} placeholder="" updateValue={(e) => updateFilter(e, "province")} />
            
            <Box>
                <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Attributes</Typography>
                {filter.attributes.map((attribute: attributes) => {
                    return (
                        <Stack direction={"row"} gap={2} sx={{marginBottom: "10px"}} key={attribute.title}>
                            <UIInput updateValue={(e) => udpateFilterAttribute(e, "title")} placeholder="Title" />
                            <UIInput updateValue={(e) => udpateFilterAttribute(e, "description")} placeholder="Description" />
                            <UIInput type="number" fullWidth={false} updateValue={(e) => udpateFilterAttribute(e, "num")} placeholder="Sequence" defaultValue={attribute.num} /> 
                        </Stack>
                    )
                })}
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginTop: "10px"}}
                    onClick={changeAttribute}
                >Add Attribute</Button>
            </Box>
            
            <Box>
                <Typography sx={{marginTop: "20px"}}>Contents</Typography>
                {filter.contents.map(cont => {
                    return (
                        <Box key={cont.sequence}>
                            <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                                <UIInput updateValue={(e) => updateFilter(e, "contentTitle")} placeholder="Title" />
                                <UIInput type="number" fullWidth={false} defaultValue={cont.sequence} updateValue={(e) => updateFilter(e, "contentSequnce")} placeholder="Sequence" />
                            </Stack>
                            <UITinyMCE
                                updateMCE={e => updateFilter(e, "dklfnsmnd")}
                            />
                        </Box>
                    )
                })}
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{marginTop: "10px"}}
                    onClick={changeContent}
                >Add Attribute</Button>
            </Box>
            
            <Box sx={{marginTop: "20px"}}>
                <Typography>Interive Content</Typography>
                {filter.interactive.map((inter: interactive) => {
                    return (
                        <Stack direction={"row"} sx={{margin: "10px 0 20px"}} gap={2}>
                            <UISelect options={["one"]} placeholder="" updateValue={(e) => updateFilter(e, "interactiveGallery")} />
                            <UIInput updateValue={(e) => updateFilter(e, "interactiveTitle")} placeholder="Title" />
                            <UIInput type="number" fullWidth={false} defaultValue={inter.sequence} updateValue={(e) => updateFilter(e, "interactiveSequence")} placeholder="Sequence" />
                        </Stack>
                    )
                })}
            </Box>

            <Button variant="contained">Create</Button>
        </Box>
    )
}

export default CreateField
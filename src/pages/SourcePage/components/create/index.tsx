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
import Attributes from "./Attributes"
import Contents from "./Contents"
import InteractiveContents from "./InteractiveContent"
import useFetchGetAllDatas from "../../../../hooks/useFetchGetAllDatas"
import { getAllFilteredLists } from "../../../../utils/getFilteredList"
import { createData } from "../../../../api/apiPostCalls"

const CreateField: React.FC = () => {
    const [category, setCategory] = useState<{[x: string]: string}>({})
    const [filterCategory, setFilterCategory] = useState<{[x: string]: string} | null>(null)
    const [filter, setFilter] = useState<{[x: string]: string} | null>(null)
    const [periodFilter, setPeriodFilter] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [image, setImage] = useState<FileList|null>(null)
    const [content, setContent] = useState<string>("")
    const [statehood, setStatehood] = useState<boolean>(true)
    const [province, setProvince] = useState<string>("")

    const [filterCategoryList, setFilterCategoryList] = useState<any[]>([])
    const [filterList, setFilterList] = useState<any[]>([])
    
    const {data: allCategoriesList} = useFetchGetAllDatas("category")

    useEffect(() => {
        allCategoriesList?.map(list => {
            if(list.id === category.id) {
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

    const handleSubmit = () => {
        if(!category || !filterCategory || !filter || !image || !periodFilter || !title) return
        const form = new FormData()
        form.append("category", category.value)
        form.append("filterCategory", filterCategory.value)
        form.append("filter", filter.value)
        form.append("periodFilter", periodFilter)
        form.append("title", title)
        form.append("image", image[0])
        form.append("content", content)
        form.append("statehood", statehood.toString())
        form.append("province", province)

        createData("resource", form, true)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => console.log("it should be working"))
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
            <UISelect options={allCategories} placeholder="" updateValue={(e) => setPeriodFilter(e.value)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Click to upload an image</Typography>
            <UIFile fileChange={(e) => setImage(e)}/>

            <Typography sx={{margin: "20px 0 10px"}}>Content</Typography>
            <UIInput updateValue={(e) => setContent(e)} />

            <Typography sx={{margin: "20px 0 10px"}}>Statehood</Typography>
            <UISwitch value={statehood} changeValue={(e) => setStatehood(e)} />
            
            <Typography sx={{margin: "15px 0 5px"}}><span style={{color: "red"}}>*</span> Select Province</Typography>
            <UISelect options={allCategories} placeholder="" updateValue={(e) => setProvince(e.value)} />
            
            <Attributes />
            
            <Contents />
            
            <InteractiveContents />

            <Button variant="contained" onClick={handleSubmit} sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default CreateField
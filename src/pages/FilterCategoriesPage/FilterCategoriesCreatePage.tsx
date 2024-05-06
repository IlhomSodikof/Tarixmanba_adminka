import { Box, Button, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import UIInput from "../../ui-components/input/input"
import UISelect from "../../ui-components/input/select"
import { createData } from "../../api/apiPostCalls"
import { getAllDatas } from "../../api/apiGetCalls"

const FilterCategoriesCreatePage: React.FC = () => {
    const [category, setCategory] = useState<{id: string, value: string}>()
    const [title, setTitle] = useState<string>("")
    const [categoryList, setCategoryList] = useState<string[]>([])

    useEffect(() => {
        getAllDatas("category")
            .then(res => setCategoryList(res.results))
            .catch(err => console.log(err))
            // .finally(() => console.log("working"))
    }, [])

    const getAllCategoryList = useMemo(() => {
        const result: {id: string, value: string}[] = []
        categoryList.map(list => {
            result.push({
                id: list.id,
                value: list.title
            })
        })
        return result
    }, [categoryList])

    const submit = () => {
        if(!title || !category) return
        
        const form = new FormData()
        form.append("title", title)
        form.append("category", category.id)

        createData("filter_category", form)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Box>
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Select Category</Typography>
            <UISelect options={getAllCategoryList} placeholder="" updateValue={(e) => {
                const cat = { id: e.id, value: e.value }
                setCategory(cat)
            }} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} fullWidth />

            <Button variant="contained" sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default FilterCategoriesCreatePage
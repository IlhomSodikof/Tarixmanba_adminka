import { Box, Button, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import UIInput from "../../ui-components/input/input"
import UISelect from "../../ui-components/input/select"
import { createData } from "../../api/apiPostCalls"
import { getAllDatas } from "../../api/apiGetCalls"

const FiltersCreatePage: React.FC = () => {
    const [filterCategory, setFilterCategory] = useState<{[x: string]: string}>({})
    const [title, setTitle] = useState<string>("")
    const [categoryList, setCategoryList] = useState<string[]>([])

    useEffect(() => {
        getAllDatas("filter_category")
            .then(res => {
                setCategoryList(res.results)
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(() => console.log("working"))
    }, [])

    const getAllCategoryList = useMemo(() => {
        const result: {[x: string]: string}[] = []
        categoryList.map((list: any) => {
            result.push({
                id: list.id,
                value: list.title
            })
        })
        return result
    }, [categoryList])

    const submit = () => {
        if(!title || !filterCategory) return

        createData("filters", {title, filter_category: filterCategory.id})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => console.log(title, filterCategory.id))
    }

    return (
        <Box>
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Select Filter Category</Typography>
            <UISelect options={getAllCategoryList} placeholder="" updateValue={(e) => {
                const filterCat = { id: e.id, value: e.value }
                setFilterCategory(filterCat)
            }} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} fullWidth />

            <Button variant="contained" sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default FiltersCreatePage
import { Box, Button, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import UIInput from "../../ui-components/input/input"
import UISelect from "../../ui-components/input/select"
import { createData } from "../../api/apiPostCalls"
import { getAllDatas } from "../../api/apiGetCalls"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"

const FilterCategoriesCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const [category, setCategory] = useState<{id: string, value: string}>({id: data?.cat_id, value: data?.cat_title})
    const [title, setTitle] = useState<string>(data?.title || "")
    const [categoryList, setCategoryList] = useState<string[]>([])
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        getAllDatas("category")
            .then(res => setCategoryList(res.results))
            .catch(err => err)
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
        setActive(true)
        
        const form = {title, category: category.id}
        
        if(isEdit) {
            updateSingleData("filter_category", data?.id, form)
                .then(res => {
                    navigate("/filter-categories", {replace: true})
                    return res
                })
                .catch(err => console.log(err))
                .finally(() => setActive(false))
        }else {
            createData("filter_category", form)
                .then(res => {
                    navigate("/filter-categories", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }

    }

    return (
        <Box>
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Select Category</Typography>
            <UISelect options={getAllCategoryList} defaultValue={category} placeholder="" updateValue={(e) => {
                const cat = { id: e.id, value: e.value }
                setCategory(cat)
            }} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} fullWidth />

            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={submit}>{isEdit ? "Edit" : "Create"}</Button>
        </Box>
    )
}

export default FilterCategoriesCreatePage
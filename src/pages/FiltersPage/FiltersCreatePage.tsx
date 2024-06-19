import { Box, Button, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import UIInput from "../../ui-components/input/input"
import UISelect from "../../ui-components/input/select"
import { createData } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"
import { updateSingleData } from "../../api/apiUpdateCalls"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"

const FiltersCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const navigate = useNavigate()

    const [filterCategory, setFilterCategory] = useState<{[x: string]: string}>({id: data?.filter_cat_id, value: data?.filter_categories_name})
    const [title, setTitle] = useState<string>(data?.title || "")
    const [active, setActive] = useState<boolean>(false)

    const {data: catList } = useFetchGetAllDatas("filter_category")

    const getAllCategoryList = useMemo(() => {
        const result: {[x: string]: string}[] = []
        catList?.map((list: any) => {
            result.push({
                id: list.id,
                value: list.title
            })
        })
        return result
    }, [catList])

    const submit = () => {
        if(!title || !filterCategory) return

        setActive(true)

        const form = {title, filter_category: filterCategory.id}

        if(isEdit) {
            updateSingleData("filters", data?.id, form)
                .then(res => {
                    navigate("/filters", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }else {
            createData("filters", form)
                .then(res => {
                    navigate("/filters", {replace: true})
                    return res
                })
                .catch(err => err)
                .finally(() => setActive(false))
        }
    }

    return (
        <Box>
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Select Filter Category</Typography>
            <UISelect options={getAllCategoryList} defaultValue={filterCategory} placeholder="" updateValue={(e) => {
                const filterCat = { id: e.id, value: e.value }
                setFilterCategory(filterCat)
            }} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} fullWidth />

            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={submit}>Create</Button>
        </Box>
    )
}

export default FiltersCreatePage
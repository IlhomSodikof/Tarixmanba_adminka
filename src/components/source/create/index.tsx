import { Box, Stack } from "@mui/material"
import UIInput from "../../../ui-components/input"
import { useEffect, useState } from "react"

interface filterType {
    category: string,
    filterCategory: string,
    filter: string
}

const CreateField: React.FC = () => {
    const [filter, setFilter] = useState<filterType>({
        category: "",
        filterCategory: "",
        filter: ""
    })

    const updateFilter = (e: string, key: string) => {
        setFilter(prev => {
            ...prev,
            [key]: e
        })
    }

    useEffect(() => {
        console.log(filter);
    }, [filter])

    return (
        <Box>
            <UIInput options={["one"]} placeholder="Select a category" updateValue={(e) => updateFilter(e, "category")} />
            <Stack>
                <UIInput options={["one"]} placeholder="Select a filter category" updateValue={setFilter} />
                <UIInput options={["one"]} placeholder="Select a filter" updateValue={setFilter} />
            </Stack>
        </Box>
    )
}

export default CreateField
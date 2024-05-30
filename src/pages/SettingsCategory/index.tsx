import { Box } from "@mui/material"
import DisplayData from "../../components/displayData"
import { useState } from "react"
import TableCells from "../../components/displayData/tableCells"
import { headers } from "./constants/headers"
import { getFilteredData } from "../../utils/getFilteredData"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import UIHeaders from "../../ui-components/headers"
import UISearch from "../../ui-components/search"
import { useDebounce } from "../../hooks/useDebounce"

const SettingsCategory: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const {data, loading, count} = useFetchGetAllDatas("connection_category", page, debouncedSearch)

    const result = data && data.length > 0 && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["title", "created_time", "updated_time"]})
        
        return (
            <TableCells key={info.id} filtered={filtered} info={info} deleteText="connection_category" />      
        )
    })

    return (
        <Box>
            <UISearch updateSearch={e => setSearch(e)} />
            <DisplayData
                count={count} 
                headersDisplay={<UIHeaders headers={headers} />}
                loading={loading}
                data={data || []}
                result={result}
                page={page}
                updatePage={e => setPage(e)}
            />
        </Box>
    )
}

export default SettingsCategory
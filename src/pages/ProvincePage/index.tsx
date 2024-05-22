import { Box } from "@mui/material"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { useDebounce } from "../../hooks/useDebounce"
import { useState } from "react"
import { getFilteredData } from "../../utils/getFilteredData"
import TableCells from "../../components/displayData/tableCells"
import UISearch from "../../ui-components/search"
import DisplayData from "../../components/displayData"
import UIHeaders from "../../ui-components/headers"
import { headers } from "./constants/headers"

const ProvincePage: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const {data, loading, count} = useFetchGetAllDatas("province", page, debouncedSearch)

    const result = data && data.length > 0 && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["title", "created_time", "updated_time"]})
        
        return (
            <TableCells key={info.id} filtered={filtered} info={info} deleteText="province" />      
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

export default ProvincePage
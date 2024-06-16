import { Box, TableCell, Typography } from "@mui/material"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { useMemo, useState } from "react"
import DisplayData from "../../components/displayData"
import TableCells from "../../components/displayData/tableCells"
import { getFilteredData } from "../../utils/getFilteredData"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { useDebounce } from "../../hooks/useDebounce"
import UISearch from "../../ui-components/search"

const LibraryCategories: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const {data, loading, count} = useFetchGetAllDatas("library_category", page, debouncedSearch)

    console.log(data, loading, count);
    
    const totalHeaders = useMemo(() => {
        return headers.reduce((sum, header) => sum + header.space, 1)
    }, [headers])

    const result = data && !loading && data.length > 0 && data.map((info: any) => {
        
        const filtered = getFilteredData({data: info, keys: ["title", "created_time", "updated_time"]});

        return (
            <TableCells key={info.id} info={info} filtered={filtered} deleteText={"library_category"} />      
        )
    })

    const headersDisplay = headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/totalHeaders*100}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    return (
        <Box>
            <UISearch updateSearch={e => setSearch(e)} />
            <DisplayData 
                count={count}
                headersDisplay={headersDisplay}
                loading={loading}
                data={data || []}
                result={result}
                page={page}
                updatePage={e => setPage(e)}
            />
        </Box>
    )
}

export default LibraryCategories
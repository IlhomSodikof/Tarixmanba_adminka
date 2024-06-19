import { useState, useMemo } from "react"
import { getFilteredData } from "../../utils/getFilteredData"
import TableCells from "../../components/displayData/tableCells"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { Box, TableCell, Typography } from "@mui/material"
import DisplayData from "../../components/displayData"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import { useDebounce } from "../../hooks/useDebounce"
import UISearch from "../../ui-components/search"

const Categories: React.FC = () => {
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)

    const {data, loading, count} = useFetchGetAllDatas("category", page, debouncedSearch)

    const totalHeaders = useMemo(() => {
        return headers.reduce((sum, header) => sum + header.space, 1)
    }, [headers])

    const result = data && !loading && data.length > 0 && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["id", "icon", "title"]});

        return (
            <TableCells key={info.id} info={info} filtered={filtered} deleteText={"category"} />      
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

export default Categories
import { Box, TableCell, Typography } from "@mui/material"
import UIButton from "../../ui-components/button"
import DisplayData from "../../components/displayData"
import { useMemo, useState } from "react"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { getFilteredData } from "../../utils/getFilteredData"
import TableCells from "../../components/displayData/tableCells"
import useFetch from "../../hooks/useFetch"

const FilterCategories: React.FC = () => {
    const [page, setPage] = useState<number>(1)

    const {data, loading, count} = useFetch("filter_category", page)

    const totalHeaders = useMemo(() => {
        return headers.reduce((sum, header) => sum + header.space, 1)
    }, [headers])

    const headersDisplay = headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/totalHeaders*90}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    const result = data && data.length > 0 && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["cat_title", "title", "created_time", "updated_time"]}) 
        
        return (
            <TableCells key={info.id} filtered={filtered} info={info} deleteText="filter_category" />      
        )
    })

    return (
        <Box>
            <Box sx={{
                display: "flex",
                justifyContent: "end"
            }}>
                <UIButton 
                    text="Create"
                    to="create"
                />
            </Box>
            <DisplayData 
                count={count}
                headersDisplay={headersDisplay}
                loading={loading}
                data={data}
                result={result}
                page={page}
                updatePage={e => setPage(e)}
            />
        </Box>
    )
}

export default FilterCategories
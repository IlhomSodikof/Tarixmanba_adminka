import { Box, TableCell, Typography } from "@mui/material"
import UIButton from "../../ui-components/button"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { useEffect, useMemo, useState } from "react"
import DisplayData from "../../components/displayData"
import { getAllDatas } from "../../api/apiGetCalls"
import { DisplayDataProps } from "../../types/libraryCategories"
import TableCells from "../../components/displayData/tableCells"
import { getFilteredData } from "../../utils/getFilteredData"

const LibraryCategories: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const [data, setData] = useState<DisplayDataProps[]|null>(null)

    const [page, setPage] = useState<number>(1)

    const totalHeaders = useMemo(() => {
        return headers.reduce((sum, header) => sum + header.space, 1)
    }, [headers])

    useEffect(() => {
        getAllDatas("library_category")
            .then(res => {
                setLoading(true)
                setData(res.results)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, [])

    const result = data && data.length > 0 && data.map((info: DisplayDataProps) => {
        
        const filtered = getFilteredData({data: info, start: 1, end: 2});

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

export default LibraryCategories
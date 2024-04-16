import { Box, TableCell, Typography } from "@mui/material"
import UIButton from "../../ui-components/button"
import { headers } from "./constants/headers"
import { DisplayDataHeaders } from "../../types"
import { useEffect, useState } from "react"
import DisplayData from "../../components/displayData"
import { getAllLibraryCategories } from "../../utils/apiGetCalls"
import { DisplayDataProps } from "../../types/libraryCategories"
import TableCells from "../../components/displayData/tableCells"

const LibraryCategories: React.FC = () => {
    const [size, _setSize] = useState<number>(1)

    const [loading, setLoading] = useState<boolean>(false)

    const [data, setData] = useState<DisplayDataProps[]|null>(null)

    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        getAllLibraryCategories()
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
        return (
            <TableCells key={info.id} info={info} />      
        )
    })

    const headersDisplay = headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/size*100}%`
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
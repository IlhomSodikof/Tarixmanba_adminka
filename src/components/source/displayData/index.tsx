// mui
import { Box, Pagination, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
// components
import TableCells from "./tableCells"
// react
import { useEffect, useState } from "react"
// ui-components
import UINoData from "../../../ui-components/noData"
// api call
import { getAllSources } from "../../../utils/apiCalls"
// const data
import { headers } from "./headers"
// types
import { DisplayDataProps, DisplayDataHeaders } from "../../../types/source"
// hooks
import { useDebounce } from "../../../hooks/useDebounce"
import Loading from "../../loading"

const DisplayData = ({search}: {search: string}) => {
    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)
    
    const [size, _setSize] = useState<number>(15)

    const [loading, setLoading] = useState<boolean>(false)

    const [data, setData] = useState<DisplayDataProps[]|null>(null)

    useEffect(() => {
        getAllSources()
            .then(res => {
                setLoading(true)
                setData(res.results)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, [debouncedSearch])

    const headersDisplay = headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/size*100}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    const result = data && data.map((info: DisplayDataProps) => {
        return (
            <Box>
                <TableCells key={info.title} info={info} />      
            </Box>
        )
    })

    return (
        <TableContainer sx={{marginTop: "40px"}}>
            {loading && <Loading />}
            {!loading && data && data?.length > 0 ? (
                <Box>
                    <Table sx={{width: "100%"}}>
                        <TableBody>
                            <TableRow selected>
                                {headersDisplay}
                            </TableRow>
                            {result}
                        </TableBody>
                    </Table>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px"
                    }}>
                        <Pagination 
                            count={data && Math.ceil(data.length/20) || 1} 
                            variant="outlined" 
                            shape="rounded"
                            page={page}
                            onChange={(_e, value) => setPage(value)}
                            boundaryCount={2}
                            />
                    </Box>    
                </Box>
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "cente"
                }}>
                    <UINoData />
                </Box>
            )}
        </TableContainer>
    )
}

export default DisplayData
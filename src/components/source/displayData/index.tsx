import { Box, Pagination, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import TableCells from "./tableCells"
import { useEffect, useState } from "react"
import { getAllSources } from "../../../utils/apiCalls"
import UINoData from "../../../ui-components/noData"
import { useDebounce } from "../../../hooks/useDebounce"

interface Data {
    category: string,
    title: string,
    created: Date,
    updated: Date
}

const DisplayData = ({search}: {search: string}) => {
    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)
    
    const [headers, _setHeaders] = useState<{text: string, space: number}[]>([
        {
            text: "Category",
            space: 5
        },
        {
            text: "Title",
            space: 5
        },
        {
            text: "Created",
            space: 2
        },
        {
            text: "Updated",
            space: 2
        },
        {
            text: "",
            space: 1
        },
    ])

    const [size, _setSize] = useState<number>(15)

    const [data, setData] = useState<Data[]|null>(null)

    useEffect(() => {
        getAllSources()
            .then(res => {
                setData(res)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [debouncedSearch])

    const headersDisplay = headers.map(header => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/size*100}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    const result = data && data.map(info => {
        return (
            <TableCells key={info.title} info={info} />      
        )
    })

    return (
        <TableContainer sx={{marginTop: "40px"}}>
            {data ? (
                <Table sx={{width: "100%"}}>
                    <TableBody>
                        <TableRow selected>
                            {headersDisplay}
                        </TableRow>
                        {result}
                    </TableBody>
                </Table>    
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "cente"
                }}>
                    <UINoData />
                </Box>
            )}
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
        </TableContainer>
    )
}

export default DisplayData
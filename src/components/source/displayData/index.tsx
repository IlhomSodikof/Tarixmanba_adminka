import { Box, Pagination, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import TableCells from "./tableCells"
import { useState } from "react"

const DisplayData = () => {
    const [page, setPage] = useState<number>(1)
    const data = [
        {
            category: "Arxiv hujjatlari 1",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari 2",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari 3",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari 4",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari 33",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        },
        {
            category: "Arxiv hujjatlari",
            title: "Toshkent shahri",
            created: new Date,
            updated: new Date
        }
    ]

    const [headers, setHeaders] = useState<{text: string, space: number}[]>([
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
    const [size, setSize] = useState<number>(15)

    const headersDisplay = headers.map(header => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/size*100}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>
        )
    })

    const result = data.map(info => {
        return (
            <TableCells key={info.title} info={info} />      
        )
    })

    return (
        <TableContainer sx={{marginTop: "40px"}}>
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
                {page}
                <Pagination 
                    count={Math.ceil(data.length/20)} 
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
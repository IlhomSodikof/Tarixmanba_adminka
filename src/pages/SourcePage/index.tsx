// react
import { useEffect, useState } from "react"
// mui
import { Box, TableCell, Typography } from "@mui/material"
// components
import DisplayData from "../../components/displayData"
import Search from "../../components/source/search"
import TableCells from "../../components/displayData/tableCells"
// const
import { headers } from "./constants/headers"
// types
import { DisplayDataProps } from "../../types/source"
import { DisplayDataHeaders } from "../../types"
// hooks
import { useDebounce } from "../../hooks/useDebounce"
// apiCalls
import { getAllSources } from "../../utils/apiGetCalls"

const Source: React.FC = () => {
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)

    const [loading, setLoading] = useState<boolean>(false)

    const [data, setData] = useState<DisplayDataProps[]|null>(null)

    const [size, _setSize] = useState<number>(15)

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

    const result = data && data.map((info: DisplayDataProps) => {
        return (
            <Box>
                <TableCells key={info.title} info={info} />      
            </Box>
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
        <section>
            <Search updateSearch={e => setSearch(e)} />
            <DisplayData 
                headersDisplay={headersDisplay} 
                loading={loading}
                result={result}
                data={data}
                page={page}
                updatePage={e => setPage(e)}
            />
        </section>
    )
}

export default Source
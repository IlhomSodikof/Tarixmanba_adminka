// react
import { useState } from "react"
// mui
import { Box } from "@mui/material"
// components
import DisplayData from "../../components/displayData"
import Search from "../../ui-components/search"
import TableCells from "../../components/displayData/tableCells"
// const
import { headers } from "./constants/headers"
// types
// hooks
import { useDebounce } from "../../hooks/useDebounce"
import useFetchGetAllDatas from "../../hooks/useFetchGetAllDatas"
import UIHeaders from "../../ui-components/headers"

const Source: React.FC = () => {
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)

    const {data, loading, count} = useFetchGetAllDatas("resource", page, debouncedSearch)

    const result = data && data.map((info: any) => {
        return (
            <Box>
                <TableCells key={info.title} info={info} filtered={[]} deleteText="resource" />      
            </Box>
        )
    })
    
    return (
        <section>
            <Search updateSearch={e => setSearch(e)} />
            <DisplayData 
                count={count}
                headersDisplay={<UIHeaders headers={headers} />} 
                loading={loading}
                result={result}
                data={data || []}
                page={page}
                updatePage={e => setPage(e)}
            />
        </section>
    )
}

export default Source
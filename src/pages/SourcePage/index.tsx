// react
import { useState } from "react"

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
import { getFilteredData } from "../../utils/getFilteredData"

const Source: React.FC = () => {
    const [search, setSearch] = useState<string>("")

    const debouncedSearch = useDebounce(search)

    const [page, setPage] = useState<number>(1)

    const {data, loading, count} = useFetchGetAllDatas("resource", page, debouncedSearch)

    const result = data && data.map((info: any) => {
        const filtered = getFilteredData({data: info, keys: ["cat_name", "title", "created_time", "updated_time"]})

        return (
            <TableCells key={info.id} info={info} filtered={filtered} deleteText="resource" />      
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
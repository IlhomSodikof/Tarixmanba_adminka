import { useEffect, useState } from "react"
import { getAllDatas } from "../api/apiGetCalls"

const useFetchGetAllDatas = (url: string, page: number = 1, search: string = "") => {
    const [data, setData] = useState<any[] | null>(null)

    const [loading, setLoading] = useState<boolean>(false)

    const [count, setCount] = useState<number>(0)

    
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await getAllDatas(`${url}/?title=${search}&page=${page.toString()}`)
            
            setData(response.results)
            setCount(response.count)
        } catch (error: any) {
            return error
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url, page, search])

    return {data, loading, count, fetchData}
}

export default useFetchGetAllDatas
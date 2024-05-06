import { useEffect, useState } from "react"
import { getAllDatas } from "../api/apiGetCalls"

const useFetch = (url: string, page: number = 1) => {
    const [data, setData] = useState<any[] | null>(null)

    const [loading, setLoading] = useState<boolean>(false)

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getAllDatas(`${url}/?page=${page.toString()}`)
                setData(response.results)
                setCount(response.count)
            } catch (error) {
                console.log("error", error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, page])

    return {data, loading, count}
}

export default useFetch
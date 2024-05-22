import { useEffect, useState } from "react"
import { getSingleData } from "../api/apiGetSingleData"

const useFetchGetSingleData = (url: string, id: string) => {
    if(!id) return {data: null, loading: false}
    const [data, setData] = useState<{[x: string]: string | {[x: string]: string}[]} | null>(null)

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getSingleData(url, id)
                setData(response)
            } catch (error) {
                return error
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, id])

    return {data, loading}
}

export default useFetchGetSingleData
import { useEffect, useState } from "react"
import { getSingleData } from "../api/apiGetSingleData"

const useFetchGetSingleData = (url: string, id: string) => {
    if(!id) return {data: null, loading: false}
    console.log(url, id);
    const [data, setData] = useState<{[x: string]: string | {[x: string]: string}[]} | null>(null)

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        console.log(id+"changed");
        
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await getSingleData(url, id)
                setData(response)
            } catch (error) {
                console.log("error", error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, id])

    return {data, loading}
}

export default useFetchGetSingleData
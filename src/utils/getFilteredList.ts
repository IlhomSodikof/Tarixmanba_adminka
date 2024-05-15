import { useMemo } from "react"

export const getAllFilteredLists = ({data}: {data: any[] | {[x: string]: string}[] | null}) => {
    const getAllFilteredList = useMemo(() => {
        const result: {id: string, value: string}[] = []
        data?.map((list: any) => {
            result.push({
                id: list.id,
                value: list.title
            })
        })
        return result
    }, [data])

    return getAllFilteredList
}
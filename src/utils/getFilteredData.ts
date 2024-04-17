interface params {
    data: any,
    start: number,
    end: number
}

export const getFilteredData = ({data, start, end}: params) => {
    const info: string[] = Object.values(data)
    const infoStart = info.splice(1, start)
    const infoEnd: string[] = end > 0 ? info.splice(-1*end).map((date: string) => date.split("T")[0]): []
    
    const result: string[] = [...infoStart, ...infoEnd]

    return result
}
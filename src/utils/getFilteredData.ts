interface params {
    data: any,
    keys: string[]
}

export const getFilteredData = ({data, keys}: params) => {
    const result: string[] = []
    const objKeys = Object.keys(data)
    keys.map((key: string) => {
        if(objKeys.includes(key)){
            if(key === "created_time" || key === "updated_time"){
                result.push(data[key].split("T")[0])
            }
            else {
                result.push(data[key])
            }
        }
    })

    return result
}
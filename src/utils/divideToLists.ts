interface params {
    data: any[], 
    key: string,
}

export const divideToLists = ({data, key}: params) => {
    const result: string[] = []
    data.map(info => {
        if(key === "interive_file" && !info[key]) {
            return result
        }
        if(info[key] !== "") {
            result.push(info[key])
        }
    })
    return result
}
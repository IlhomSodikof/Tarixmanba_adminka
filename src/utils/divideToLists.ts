interface params {
    data: any[], 
    key: string,
}

export const divideToLists = ({data, key}: params) => {
    const result: string[] = []
    data.map(info => {
        if(key === "file" && !info[key]) {
            return result
        }
        if(info[key] !== "" && info[key] !== null && info[key] !== undefined) {
            result.push(info[key])
            console.log(info[key], data, key);
        }
        
    })
    return result
}
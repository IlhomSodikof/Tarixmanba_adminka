interface params {
    data: any[], 
    key: string,
}

export const divideToLists = ({data, key}: params) => {
    // console.log(data, key);
    
    const result: string[] = []
    data.map(info => {
        if(key === "file" && !info[key]) {
            return result
        }
        if(info[key] !== "" && info[key] !== null) {
            result.push(info[key])
            console.log(info[key], data, key);
        }
        
    })
    return result
}
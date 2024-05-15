import instance from "./settings";

export const createData = async (text: string, data: any, hasImage?: boolean) => {
    const contentType = hasImage ? "multiplart/form-data" : "application/json"
    try {
        const res = await instance.post(`${text}/create/`, data, {
            headers: {
                "Content-Type": contentType
            }
        })
        return res.data
    } catch (error) {
        throw error
    }    
}
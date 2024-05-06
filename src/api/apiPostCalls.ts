import instance from "./settings";

export const createData = async (text: string, data: any, hasImage?: boolean) => {
    if(hasImage) {
        console.log(text, data, hasImage);
        try {
            const res = await instance.post(`${text}/create/`, data, {
                headers: {
                    "Content-Type": "multiplart/form-data"
                }
            })
            return res.data
        } catch (error) {
            throw error
        }    
    }
    try {
        const res = await instance.post(`${text}/create/`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.data
    } catch (error) {
        throw error
    }
}
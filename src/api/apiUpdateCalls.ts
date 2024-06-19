import instance from "./settings"

export const updateSingleData = async (text: string, id: string | number, updatedData: any, hasImage: boolean = false) => {
    if(hasImage) {
        try {
            const res = await instance.put(`${text}/${id}/update/`, updatedData, {
                headers: {
                    "Content-Type": "multiplart/form-data"
                }
            })
            return res.data
        } catch (error) {
            throw error
        }    
    }
    else {
        try {
            const res = await instance.put(`${text}/${id}/update/`, updatedData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return res.data
        } catch (error) {
            throw error
        }
    }
}
import instance from "./settings"

export const updateSingleData = async (text: string, id: string | number, updatedData: any, hasImage: boolean = false) => {
    if(hasImage) {
        try {
            const res = await instance.put(`${text}/update/${id}`, updatedData, {
                headers: {
                    "Content-Type": "multiplart/form-data"
                }
            })
            console.log(res.data);
            return res.data
        } catch (error) {
            throw error
        }    
    }
    else {
        try {
            const res = await instance.put(`${text}/update/${id}`, updatedData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(res.data);
            return res.data
        } catch (error) {
            throw error
        }
    }
}
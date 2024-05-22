import instance from "./settings"

export const getSingleData = async (text: string, id: string | number) => {
    try {
        const res = await instance.get(`${text}/${id}/detail`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        return res.data
    } catch (error) {
        throw error
    }
}
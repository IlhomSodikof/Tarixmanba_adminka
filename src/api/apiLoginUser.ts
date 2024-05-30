import instance from "./settings";

export const loginUser = async (data: any) => {
    try {
        const res = await instance.post("user/token/", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.data
    } catch (error) {
        throw error
    }    
}
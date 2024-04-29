import instance from "./settings";

export const createData = async (text: string, data: any) => {
    try {
        const res = await instance.post(`${text}/create/`, data)
        return res.data
    } catch (error) {
        throw error
    }
}
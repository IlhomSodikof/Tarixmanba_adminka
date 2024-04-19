import instance from "./settings"

export const deleteItem = async (link: string, id: string) => {
    try {
        const res = await instance.delete(`${link}/delete/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
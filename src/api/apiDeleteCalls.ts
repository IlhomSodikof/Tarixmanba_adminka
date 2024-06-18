import instance from "./settings"

export const deleteItem = async (link: string, id: string) => {
    try {
        const res = await instance.delete(`${link}/${id}/delete`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        location.reload()
        return res.data
    } catch (error) {
        console.log(error);
        throw error
    }
}
import instance from "../api/settings"

export const getAllSources = async () => {
    try {
        const res = await instance("api/about/")
        console.log(res.data);
        return res.data
    } catch (error) {
        throw error
    }
}
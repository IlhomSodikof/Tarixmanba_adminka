import instance from "../api/settings";

export const createLibraryCategories = async (data: any) => {
    try {
        const res = await instance.post("library_category/create/", data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const createArticles = async (data: any) => {
    try {
        const res = await instance.post("news/create/", data)
        return res.data
    } catch (error) {
        throw error
    }
}
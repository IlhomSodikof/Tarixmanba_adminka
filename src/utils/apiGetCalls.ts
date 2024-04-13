import instance from "../api/settings"

export const getAllSources = async () => {
    try {
        const res = await instance.get("resource/")
        return res.data
    } catch (error) {
        throw error
    }
}

export const getAllLibraryCategories = async () => {
    try {
        const res = await instance.get("library_category/")
        return res.data
    } catch (error) {
        throw error
    }
}
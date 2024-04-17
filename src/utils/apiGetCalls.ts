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

export const getSingleLibraryCategories = async (id: string) => {
    try {
        //library-categories
        const res = await instance.get(`feedbacks/${id}`)
        console.log(id, res);
        return res.data
    } catch (error) {
        throw error
    }
}

export const getAllAtricles = async () => {
    try {
        const res = await instance.get("news/")
        return res.data
    } catch (error) {
        throw error
    }
}


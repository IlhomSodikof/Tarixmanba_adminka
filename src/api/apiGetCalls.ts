import instance from "./settings"

export const getAllDatas = async (text: string) => {
    try {
        const res = await instance.get(`${text}/`)
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

export const getSingleData = async (id: string, text: string) => {
    try {
        const res = await instance.get(`${text}/${id}`)
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


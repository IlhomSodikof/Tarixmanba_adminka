import axios from "axios";

const api = import.meta.env.VITE_API

const instance = axios.create({
    baseURL: api,
    headers: {
        "Content-Type": "application/json"
    }
})

export default instance
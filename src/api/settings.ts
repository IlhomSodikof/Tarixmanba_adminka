import axios from "axios";

const api = import.meta.env.VITE_API

const instance = axios.create({
    baseURL: api,
})

export default instance
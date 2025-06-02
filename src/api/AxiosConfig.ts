import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const Api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
})

export default Api
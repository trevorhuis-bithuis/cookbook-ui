import axios from "axios";

const API = import.meta.env.VITE_API

export default axiosPublic = axios.create({
    baseURL: `${API}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});
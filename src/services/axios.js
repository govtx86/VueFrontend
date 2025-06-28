import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:${import.meta.env.VITE_PORT}/`,
    withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
    const authStore = useAuthStore()
    if (authStore.csrfToken) {
        config.headers['X-CSRF-Token'] = authStore.csrfToken;
    }
    return config
})

export default axiosInstance
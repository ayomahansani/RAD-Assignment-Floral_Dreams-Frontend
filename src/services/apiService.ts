import axios from 'axios';

// axios instance ( one instance, use in every slice )
export const api = axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
    (config) => {
        if (!config?.url?.includes("/auth")) {
            const token = localStorage.getItem("jwt_token");
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);
import axios from "axios";
import { clearStorage } from "cache";
// import { toastError } from "components/Toastify";

const api = axios.create();

// api.interceptors.response.use((response) => {
//     return Promise.resolve(response)
// }, (error) => {
//     if (error?.response?.status === 401) {
//         // toastError("Your session was expired");
//         clearStorage();
//         window.location.href = "/login"
//     } else {
//         return Promise.reject(error);
//     }
// });

export default api;

import axios from "axios";

export default function usersInterceptor() {
    axios.interceptors.request.use((req) => {
        console.log("Request Interceptor: ", req);
        return req;
    });

}
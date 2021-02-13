import axios from "axios";

// Axios
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.headers.authentication = process.env.NEXT_PUBLIC_API_TOKEN;

export const apiUrl = process.env.NEXT_PUBLIC_API_URI.slice(0, -1);

export const fetcher = axios;

export const swrfetcher = (url) => axios.get(url).then((res) => res.data);

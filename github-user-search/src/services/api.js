import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY || ""}`,
  },
});

export const fetchUser = (username) =>
  api.get(`/users/${username}`).then((res) => res.data);

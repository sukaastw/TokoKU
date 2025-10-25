import axios from "axios";

const token = "2|7bReJMcZnfcw0gY2Xf2OPkvtHk3cODNLEGJERRWXb8c47551";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`, // <-- tambahkan spasi
  },
});

export default apiClient;

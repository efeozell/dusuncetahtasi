import axios from "axios";

//yayinlarken localhostu kullanmadigimiz icin dinamik hale getirmemiz gerekiyor.
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

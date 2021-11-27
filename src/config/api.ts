import axios from "axios";

export const http = axios.create({
  baseURL: "https://petronasdemo.aa.assetdata.xyz/api/v1",
});

const api = {
  login: (data: any) => http.post("/a/hash-login", data),
};

export default api;

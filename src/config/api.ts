import axios from "axios";
import TokenManager from "../utils/helpers/TokenManager";

export const http = axios.create({
  baseURL: "https://petronasdemo.aa.assetdata.xyz/api/v1",
});

const config = () => {
  return { headers: { Authorization: "Bearer " + TokenManager.getToken() } };
};

const api = {
  login: (data: any) => http.post("/a/hash-login", data),
  me: () => http.get("/a/me", config()),
  supplier: (params: string) =>
    http.get("/setting/supplier/filter?" + params, config()),
};

export default api;

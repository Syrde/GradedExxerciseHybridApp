import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.136:9006/api",
});

export default apiClient;

import axios from "axios";
import { API } from "config";

export const getUserInfo = async () => {
  return await axios
    .get(`${API}/users/myProfile`)
    // .get("/api/isLogin")
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => console.log("catch err:", err));
};

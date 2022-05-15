import axios from "axios";
import { useRouter } from "next/router";
import { API } from "config";

export const getUserInfo = async () => {
  const router = useRouter();

  return await axios
    .get(`${API}/users/myProfile`)
    // .get("/api/isLogin")
    .then((res) => {
      const data = res.data.data;

      router.push("/");
      return data;
    })
    .catch((err) => console.log("catch err:", err));
};

import axios from "axios";

export default function AxiosConfig() {
  axios.interceptors.response.use(
    (res: any) => res,
    async (err) => {
      const {
        response: { status },
      } = err;

      if (status === 403) {
        sessionStorage.removeItem("accessToken");
        // window.location.href = "/auth/login";
      }
    }
  );
}

import axios from "axios";
import { useQuery } from "react-query";

interface loginUser {
  email: string;
  password: string;
}

const useLogin = () => {
  const { data, isLoading } = useQuery<loginUser>(
    ["login"],
    async () => await axios.get(`/api/login`).then((res) => res.data)
  );
  return { data, isLoading };
};

export default useLogin;

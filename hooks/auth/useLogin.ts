import axios from "axios";
import { useQuery } from "react-query";

interface loginUser {
  email: string;
  password: string;
}

const useLogin = () => {
  const { data, isLoading } = useQuery<loginUser>(["login"], async () => {
    axios.get(`/api/login`).then((res) => console.log("hihi"));
  });
  return { data, isLoading };
};

export default useLogin;

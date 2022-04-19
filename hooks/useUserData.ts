import axios from "axios";
import { User } from "interface/user";
import { useQuery } from "react-query";

const useUserData = () => {
  const { data, isLoading } = useQuery<User>([1], async () => {
    return axios.get(`/api/user`).then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};

export default useUserData;

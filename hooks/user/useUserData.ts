import axios from "axios";
import { IUser } from "interface/user";
import { useQuery } from "react-query";

const useUserData = () => {
  const { data, isLoading } = useQuery<IUser>([1], async () =>
    axios.get(`/api/users`).then((res) => res.data)
  );
  return { data, isLoading };
};

export default useUserData;

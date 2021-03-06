import { getUserInfo } from "apis/auth";
import { useQuery } from "react-query";

const useUserInfo = () => {
  const { data, isLoading } = useQuery(["userInfo"], () => getUserInfo());
  return { data, isLoading };
};

export default useUserInfo;

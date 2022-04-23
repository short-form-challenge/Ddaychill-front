import useUserData from "hooks/useUserData";
import { NextPage } from "next";

const login: NextPage = () => {
  const { data: userData, isLoading } = useUserData();
  return <div>{isLoading ? "loading" : userData?.name}</div>;
};

export default login;

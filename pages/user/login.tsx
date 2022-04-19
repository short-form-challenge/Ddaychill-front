import { NextPage } from "next";
import useUserData from "hooks/useUserData";

const login: NextPage = () => {
  const { data: userData, isLoading } = useUserData();
  return <div>{isLoading ? "loading" : userData?.name}</div>;
};

export default login;

import { NextPage } from "next";
import { useEffect, useState } from "react";

import VideoList from "@components/video/VideoList";
import Tabs from "@components/header/Tabs";
import usePost from "hooks/video/useVideo";

import { useRouter } from "next/router";

const index: NextPage = () => {
  const [cateId, setCateId] = useState(1);
  const { data, isLoading, fetchNextPage } = usePost(cateId);

  const router = useRouter();
  const checkLogin = () => {
    if (!sessionStorage.getItem("accessToken"))
      return router.push("/auth/login");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Tabs setCateId={setCateId} cateId={cateId} />
      <VideoList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};

export default index;

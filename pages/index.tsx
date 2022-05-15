import { NextPage } from "next";
import { useState } from "react";
import VideoList from "@components/video/VideoList";
import Tabs from "@components/header/Tabs";
import usePost from "hooks/video/useVideo";

const index: NextPage = () => {
  const [cateId, setCateId] = useState(1);
  const { data, isLoading, fetchNextPage } = usePost(cateId, "main");

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

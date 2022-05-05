import Navigation from "@components/navigation/navigation";
import VideoList from "@components/video/VideoList";

import { NextPage } from "next";
import Tabs from "@components/header/Tabs";
import usePost from "hooks/video/useVideo";
import { useState } from "react";

const index: NextPage = () => {
  const [cateId, setCateId] = useState(1);
  const { data, isLoading, fetchNextPage } = usePost(cateId);
  return (
    <>
      <Tabs setCateId={setCateId} cateId={cateId} />
      <VideoList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />
      <Navigation />
    </>
  );
};

export default index;

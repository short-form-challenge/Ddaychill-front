import { HeaderWrapper } from "@components/header/Tabs";
import VideoDetail from "@components/video/VideoDetail";
import useVideoDetail from "hooks/video/useVideoDetail";

import { NextPage } from "next";
import { useRouter } from "next/router";

const Video: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useVideoDetail(id?.toString());
  return (
    <>
      <HeaderWrapper>관심영상</HeaderWrapper>
      <VideoDetail data={data} isLoading={isLoading} />
    </>
  );
};

export default Video;

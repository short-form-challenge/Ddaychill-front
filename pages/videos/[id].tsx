import VideoDetail from "@components/video/VideoDetail";
import useVideoDetail from "hooks/video/useVideoDetail";

import { NextPage } from "next";
import { useRouter } from "next/router";

const Video: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useVideoDetail(id?.toString(), "main");
  return (
    <>
      <VideoDetail data={data} isLoading={isLoading} />
    </>
  );
};

export default Video;

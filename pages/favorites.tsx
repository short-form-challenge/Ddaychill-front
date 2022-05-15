import VideoList from "@components/video/VideoList";
import { NextPage } from "next";
import { HeaderWrapper } from "@components/header/Tabs";
import useVideo from "hooks/video/useVideo";

const favorites: NextPage = () => {
  const { data, isLoading, fetchNextPage } = useVideo(0, "liked");
  return (
    <>
      <HeaderWrapper>관심영상</HeaderWrapper>
      <VideoList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};

export default favorites;

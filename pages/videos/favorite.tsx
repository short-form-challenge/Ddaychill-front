import VideoList from "@components/video/VideoList";
import { NextPage } from "next";
import { HeaderWrapper } from "@components/header/Tabs";
import useFavorite from "hooks/video/useFavorite";

const favorite: NextPage = () => {
  const { data, isLoading, fetchNextPage } = useFavorite();
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

export default favorite;

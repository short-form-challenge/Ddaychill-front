import Navigation from "@components/navigation/navigation";
import VideoList from "@components/video/VideoList";

import { NextPage } from "next";
import Tabs from "@components/header/Tabs";

const index: NextPage = () => {
  return (
    <>
      <Tabs />
      <VideoList />
      <Navigation />
    </>
  );
};

export default index;

import Navigation from "@components/navigation/navigation";
import VideoList from "@components/video/VideoList";

import { NextPage } from "next";
import Tabs from "@components/header/Tabs";
import { useRouter } from "next/router";
import VideoDetail from "@components/video/VideoDetail";
import { AnimatePresence } from "framer-motion";

const index: NextPage = () => {
  const {
    query: { videoId },
  } = useRouter();
  return (
    <AnimatePresence>
      {!videoId && <Tabs />}
      {videoId ? <VideoDetail /> : <VideoList />}
      <Navigation />
    </AnimatePresence>
  );
};

export default index;

import Tabs from "@components/header/Tabs";
import Navigation from "@components/navigation/navigation";
import VideoList from "@components/video/VideoList";

const favorite = () => {
  return (
    <>
      <Tabs />
      <VideoList />
      <Navigation />
    </>
  );
};

export default favorite;

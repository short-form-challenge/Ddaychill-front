import { NextPage } from "next";
import { useEffect, useState } from "react";
import VideoList from "@components/video/VideoList";
import Tabs from "@components/header/Tabs";
import usePost from "hooks/video/useVideo";
import OnboardingComponent from "@components/onboarding/OnboardingComponent";
import { useRouter } from "next/router";

const index: NextPage = () => {
  const router = useRouter();
  console.log(router.query.isLogin);
  const [cateId, setCateId] = useState(1);
  const [onboardVisible, setOnboardVisible] = useState(false);
  const { data, isLoading, fetchNextPage } = usePost(cateId);

  useEffect(() => {
    setOnboardVisible(true);
    setTimeout(() => {
      setOnboardVisible(false);
    }, 3000);
  }, []);

  if (router.query.isLogin && onboardVisible) {
    return <OnboardingComponent />;
  }

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

import VideoList from "@components/video/VideoList";
import axios from "axios";
import { API } from "config";
import useUserVideo from "hooks/video/useUserVideo";
import { IProfile } from "interface/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Profile = () => {
  const [item, setItem] = useState<IProfile>({});
  const healthDayCnt =
    item.challenges && item.challenges.find((x) => x.category === 1)?.dayCnt
      ? Number(item.challenges.find((x) => x.category === 1)?.dayCnt)
      : 0;
  const studyDayCnt =
    item.challenges && item.challenges.find((x) => x.category === 2)?.dayCnt
      ? Number(item.challenges.find((x) => x.category === 2)?.dayCnt)
      : 0;
  const router = useRouter();
  useEffect(() => {
    getProfileData();
  }, [router.query.id]);
  const { data, isLoading, fetchNextPage } = useUserVideo(Number(item.userId));

  const getProfileData = async () => {
    try {
      const res = await axios.get(`${API}/users/${router.query.id}/profile`);
      setItem(res.data.data);
    } catch (err) {}
  };

  return (
    <>
      <Wrapper>
        <BackArrowIcon onClick={() => router.back()}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </BackArrowIcon>
        <UserInfoWrap>
          {item.profileFilePath ? (
            <UserPhoto src={`${API + item.profileFilePath}`} />
          ) : (
            <UserPhoto src="/assets/img/noProfileImage.png" />
          )}
          <UserName>{item.nickname}</UserName>
        </UserInfoWrap>
        <TagWrap>
          {item.challenges && item.challenges.find((x) => x.category === 1) && (
            <CategoryTag>{`#운동_day${healthDayCnt}`}</CategoryTag>
          )}
          {item.challenges && item.challenges.find((x) => x.category === 2) && (
            <CategoryTag>{`#공부_day${studyDayCnt}`}</CategoryTag>
          )}
        </TagWrap>
      </Wrapper>
      <VideoList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};

export default Profile;

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(197.78deg, #4d23d6 30.81%, #139ae9 107.31%);
  padding: 54px 20px 32px 20px;
  margin-bottom: 5px;
  z-index: 1;
`;

const BackArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  color: white;
  cursor: pointer;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserPhoto = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 12px;
`;

const TagWrap = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

const CategoryTag = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  padding: 6px 8px;
  color: #4d23d6;
  background-color: white;
  border-radius: 6px;
  margin-right: 7px;
`;

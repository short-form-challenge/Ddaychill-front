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
        <BackArrowIcon>
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
          {item?.challenges && item?.challenges[0]?.category && (
            <CategoryTag>#운동</CategoryTag>
          )}
          {item?.challenges && item?.challenges[1]?.category && (
            <CategoryTag>#공부</CategoryTag>
          )}
          <DayTag>Day {item?.ongoingChallengeCnt}</DayTag>
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
  background: linear-gradient(197.78deg, #4d23d6 30.81%, #139ae9 107.31%);
  padding: 54px 20px 32px 20px;
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
  margin-right: 2px;
`;

const DayTag = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  padding: 6px 14px;
  color: #4d23d6;
  background-color: white;
  border-radius: 6px;
  margin-left: 6px;
`;

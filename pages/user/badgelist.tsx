import BackButtonHeader from "@components/header/BackButtonHeader";
import axios from "axios";
import { API } from "config";
import { IProfile } from "interface/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Badgelist = () => {
  const router = useRouter();
  const [item, setItem] = useState<IProfile>({
    challenges: [
      {
        badgeCnt: 0,
        category: 0,
        dayCnt: 0,
      },
    ],
    nickname: "",
    ongoingChallengeCnt: 0,
    profileFilePath: "",
    totalBadgeCnt: 0,
    userId: 0,
  });
  const healthBgCnt =
    item.challenges && item.challenges.find((x) => x.category === 1)?.badgeCnt
      ? Number(item.challenges.find((x) => x.category === 1)?.badgeCnt)
      : 0;
  const studyBgCnt =
    item.challenges && item.challenges.find((x) => x.category === 2)?.badgeCnt
      ? Number(item.challenges.find((x) => x.category === 2)?.badgeCnt)
      : 0;
  useEffect(() => {
    getMyData();
  }, []);
  const getMyData = async () => {
    try {
      const res = await axios.get(`${API}/users/myProfile`, {
        headers: {
          "X-AUTH-TOKEN": `${sessionStorage.getItem("accessToken")}`,
        },
      });
      setItem(res.data.data);
      console.log(res.data);
    } catch (error) {
      // alert(error);
    }
  };
  return (
    <>
      <BackButtonHeader
        onClickBackButton={() => router.push("/user/mypage")}
        isBackButton={true}
        text="뱃지 현황"
      ></BackButtonHeader>
      <Wrapper>
        <BadgeCntWrap>
          <CntWrap>
            <CntLable>운동 뱃지</CntLable>
            <CntNumber>{healthBgCnt}</CntNumber>
          </CntWrap>
          <CntLine></CntLine>
          <CntWrap>
            <CntLable>공부 뱃지</CntLable>
            <CntNumber>{studyBgCnt}</CntNumber>
          </CntWrap>
        </BadgeCntWrap>
        <BadgeListWrap>
          {new Array(healthBgCnt).fill(1).map((_, index) => (
            <EmptyBadge
              src={`/assets/img/healthBadge${(index % 5) + 1}.png`}
              key={index}
            />
          ))}
          {new Array(studyBgCnt).fill(1).map((_, index) => (
            <EmptyBadge
              src={`/assets/img/studyBadge${(index % 5) + 1}.png`}
              key={index}
            />
          ))}
          {new Array(
            18 - healthBgCnt - studyBgCnt >= 0
              ? 18 - healthBgCnt - studyBgCnt
              : 0
          )
            .fill(1)
            .map((index) => (
              <EmptyBadge src="/assets/img/noBadge.png" key={index} />
            ))}
        </BadgeListWrap>
      </Wrapper>
    </>
  );
};

export default Badgelist;

const Wrapper = styled.div`
  height: 75vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BadgeListWrap = styled.div`
  padding: 0px 50px;
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const EmptyBadge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 15px 18px;
`;
const BadgeCntWrap = styled.div`
  width: 280px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CntWrap = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CntLable = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;
  color: #4d23d6;
`;
const CntNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #4d23d6;
`;
const CntLine = styled.div`
  height: 39px;
  width: 1px;
  background-color: #4d23d6;
`;

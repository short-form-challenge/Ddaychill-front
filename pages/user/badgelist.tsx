import BackButtonHeader from "@components/header/BackButtonHeader";
import { useRouter } from "next/router";
import styled from "styled-components";

const Badgelist = () => {
  const router = useRouter();
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
            <CntNumber>0</CntNumber>
          </CntWrap>
          <CntLine></CntLine>
          <CntWrap>
            <CntLable>공부 뱃지</CntLable>
            <CntNumber>1</CntNumber>
          </CntWrap>
        </BadgeCntWrap>
        <BadgeListWrap>
          {new Array(18).fill(1).map((index) => (
            <EmptyBadge key={index} />
          ))}
        </BadgeListWrap>
      </Wrapper>
    </>
  );
};

export default Badgelist;

const Wrapper = styled.div`
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BadgeListWrap = styled.div`
  padding: 0px 50px;
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const EmptyBadge = styled.div`
  width: 50px;
  height: 50px;
  background: #c4c4c4;
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

import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <Wrapper>
        <BackArrowIcon>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </BackArrowIcon>
        <UserInfoWrap>
          <UserPhoto></UserPhoto>
          <UserName>레오와 두리</UserName>
        </UserInfoWrap>
        <TagWrap>
          <CategoryTag>#운동</CategoryTag>
          <CategoryTag>#공부</CategoryTag>
          <DayTag>Day 1</DayTag>
        </TagWrap>
      </Wrapper>
      {/* <VideoList /> */}
    </>
  );
};

export default Profile;

const Wrapper = styled.div`
  background: linear-gradient(197.78deg, #4d23d6 30.81%, #8dabff 107.31%);
  padding: 54px 20px 32px 20px;
  margin-bottom: 12px;
`;

const BackArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  color: white;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserPhoto = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: sandybrown;
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

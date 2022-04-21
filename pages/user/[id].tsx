import { NextPage } from "next";
import styled from "styled-components";

const Profile: NextPage = () => {
  return (
    <Wrapper>
      <WrapperHeader>
        <Titletext>마이비디오</Titletext>
      </WrapperHeader>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div``;
const WrapperHeader = styled.div``;
const Titletext = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;

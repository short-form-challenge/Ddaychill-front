import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/assets/img/logo-ddaychill.svg";
const OnboardingComponent = () => {
  return (
    <OnboardWrapper>
      <LogoImage src={logo} alt="logo" width={68} height={76} />
    </OnboardWrapper>
  );
};

export default OnboardingComponent;

const OnboardWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
  z-index: 9;
  opacity: 1;
  animation: fadeout 1.5s;
  animation-name: onboarding;
`;

const LogoImage = styled(Image)``;

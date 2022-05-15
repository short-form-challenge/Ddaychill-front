import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/assets/img/logo-ddaychill.svg";
import { AnimatePresence, motion } from "framer-motion";

const animate = {
  initial: {
    transform: `scale(0.5)`,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  animate: {
    transform: `scale(3)`,
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const OnboardingComponent = () => {
  return (
    <AnimatePresence initial={true}>
      <OnboardWrapper
        variants={animate}
        initial="initial"
        animate="animate"
        key={"boarding"}
      >
        <LogoImage src={logo} alt="logo" width={68} height={76} />
      </OnboardWrapper>
    </AnimatePresence>
  );
};

export default OnboardingComponent;

const OnboardWrapper = styled(motion.div)<{ [key: string]: any }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 100%;
  width: 100%;
  z-index: 9;
  opacity: 1;
  animation: fadeout 3s;
  animation-name: onboarding;
`;

const LogoImage = styled(Image)``;

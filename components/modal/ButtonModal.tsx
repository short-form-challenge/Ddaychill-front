import { IButtons } from "@components/video/VideoDetail";
import { motion } from "framer-motion";
import styled from "styled-components";
import MainButton from "../button/MainButton";

interface Props {
  buttons: (IButtons | null)[];
  onClose: any;
}

const ButtonModal = ({ buttons, onClose }: Props) => {
  return (
    <BackDrop>
      <Wrapper>
        <TopButton>
          {buttons.map((button, i) => (
            <MainButton
              key={i}
              bgcolor="#F2F2F2"
              color="black"
              onClick={button!.action}
              text={button!.text}
            />
          ))}
          {/* 버튼이 2개일 때, 1개일 때 모두 나오는 메인 버튼 */}
        </TopButton>
        <MainButton onClick={onClose} text={"취소"} />
      </Wrapper>
    </BackDrop>
  );
};

export default ButtonModal;

const BackDrop = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  max-width: 375px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const TopButton = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  line-height: 23px;
  z-index: 101;
  overflow: hidden;
  margin-bottom: 8px;
`;

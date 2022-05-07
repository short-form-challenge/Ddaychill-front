import { motion } from "framer-motion";
import styled from "styled-components";
import MainButton from "../button/MainButton";
import { BackDrop } from "./style";

export type textType = "정보" | "수정" | "삭제" | "커버업로드" | "초기화";

interface Props {
  texts: textType[];
  onClose: any;
  onClick: (v: textType) => void;
}

const ButtonModal = ({ texts, onClose, onClick }: Props) => {
  return (
    <BackDrop>
      <Wrapper>
        <TopButton>
          {texts?.map((v) => (
            <MainButton
              key={v}
              bgcolor="#F2F2F2"
              color="black"
              onClick={() => onClick(v)}
              text={v}
            />
          ))}
        </TopButton>
        <MainButton onClick={onClose} text={"취소"} />
      </Wrapper>
    </BackDrop>
  );
};

export default ButtonModal;

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

import styled from "styled-components";
import { HeaderWrapper } from "./Tabs";

interface Props {
  text: string;
  isBackButton?: boolean;
  onClickBackButton?: () => void;
}

const BackButtonHeader = ({ text, onClickBackButton, isBackButton }: Props) => {
  return (
    <HeaderWrapper>
      {isBackButton && (
        <GoBackButton onClick={onClickBackButton}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </GoBackButton>
      )}
      {text}
    </HeaderWrapper>
  );
};

export default BackButtonHeader;
const GoBackButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 20px;
  cursor: pointer;
`;

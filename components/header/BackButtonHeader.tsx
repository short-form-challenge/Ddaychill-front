import { useRouter } from "next/router";
import styled from "styled-components";
import { HeaderWrapper } from "./Tabs";

interface Props {
  text: string;
  isBackButton?: boolean;
  isCloseButton?: boolean;
  onClickBackButton?: () => void;
}

const BackButtonHeader = ({
  text,
  onClickBackButton,
  isBackButton,
  isCloseButton,
}: Props) => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      {isBackButton && (
        <GoBackButton onClick={onClickBackButton}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </GoBackButton>
      )}
      {text}
      {isCloseButton && (
        <CloseButton onClick={() => router.replace("/")}>
          <span className="material-symbols-rounded">close</span>
        </CloseButton>
      )}
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

const CloseButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 20px;
  cursor: pointer;
`;

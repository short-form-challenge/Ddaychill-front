import styled from "styled-components";
import MainButton from "../button/MainButton";
import { IModal } from "interface/components";

const Modal = ({
  children,
  onClickMainCofirm,
  mainConfirm,
  onClickSubConfirm,
  subConfirm = null,
}: IModal) => {
  return (
    <BackDrop>
      <Card>
        <MainTextDiv>{children}</MainTextDiv>
        <ModalFooter>
          {/* 버튼이 2개일 때만 나오는 왼쪽버튼 */}
          {subConfirm && (
            <MainButton
              bgcolor="#F2F2F2"
              color="black"
              text={subConfirm}
              onClick={onClickSubConfirm}
            />
          )}
          {/* 버튼이 2개일 때, 1개일 때 모두 나오는 메인 버튼 */}
          <MainButton onClick={onClickMainCofirm} text={mainConfirm} />
        </ModalFooter>
      </Card>
    </BackDrop>
  );
};

export default Modal;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainTextDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 35px;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 49px 20px 16px 20px;
  width: 313px;
  height: 192px;
  text-align: center;
  line-height: 23px;
  z-index: 100;
  /* overflow: hidden; */
`;

const ModalFooter = styled.div`
  display: flex;
`;

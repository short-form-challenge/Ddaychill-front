import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  setCateId: Dispatch<SetStateAction<number>>;
  cateId: number;
}

export const HeaderWrapper = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 30px;
  width: 100%;
  display: flex;
  position: absolute;
  background-color: white;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 10;
`;

const Tab = styled.div<{ selected: boolean }>`
  border-bottom: 2px solid ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "black" : "rgba(0,0,0,0.4)")};
  cursor: pointer;
`;

const Tabs = ({ setCateId, cateId }: Props) => {
  return (
    <HeaderWrapper>
      <Tab selected={cateId === 1} onClick={() => setCateId(1)}>
        운동
      </Tab>
      <Tab selected={cateId === 2} onClick={() => setCateId(2)}>
        공부
      </Tab>
    </HeaderWrapper>
  );
};

export default Tabs;

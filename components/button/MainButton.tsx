import { FC } from "react";
import styled from "styled-components";
import { IMainButton } from "interface/components";

const MainButton: FC<IMainButton> = ({
  text,
  bgcolor = "#4d23d6",
  color = "white",
  onClick,
}) => {
  return (
    <>
      <Button color={color} bgcolor={bgcolor} onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export default MainButton;

const Button = styled.button<IMainButton>`
  border: none;
  padding: 13px 0px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  background-color: ${(props) => props?.bgcolor};
  color: ${(props) => props?.color};

  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

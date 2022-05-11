import styled from "styled-components";
import { IMainButton } from "interface/components";
import { CSSProperties } from "react";

interface Props {
  text: string;
  bgcolor?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  type: "button" | "submit" | "reset";
}

const MainButton = ({
  text,
  bgcolor = "#4d23d6",
  color = "white",
  onClick,
  disabled,
  style,
  type = "button",
}: Props) => {
  return (
    <>
      <Button
        style={style}
        color={color}
        bgcolor={bgcolor}
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...(onClick && { onClick })}
      >
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

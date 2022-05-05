import styled from "styled-components";
const MainButton = ({
  text,
  bgcolor = "#4d23d6",
  color = "white",
  ...rest
}) => {
  return (
    <>
      <Button color={color} bgcolor={bgcolor} {...rest}>
        {text}
      </Button>
    </>
  );
};

export default MainButton;

const Button = styled.button`
  border: none;
  padding: 13px 0px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};

  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

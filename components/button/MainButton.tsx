import styled from "styled-components";
const MainButton = ({
  text,
  ...rest
}: {
  text: string;
  [key: string]: any;
}) => {
  return (
    <>
      <Button {...rest}>{text}</Button>
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
  background-color: #4d23d6;
  color: white;

  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #80808028;
`;

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100vh;
  width: 375px;
  background-color: white;
`;

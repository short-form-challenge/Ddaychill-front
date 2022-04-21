import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <MobileWrapper>{children}</MobileWrapper>
    </LayoutWrapper>
  );
};

export default MainLayout;

const LayoutWrapper = styled.div`
  height: 100vh;
  background-color: #80808028;
`;

const MobileWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 375px;
  /* 지현님께 padding 통일 물어보기~! */
  padding: 0 20px;
  background-color: white;
`;

import { FC } from "react";
import { PaddingWrapper } from "interface/components";
import styled from "styled-components";

const PaddingWrapperDiv: FC<PaddingWrapper> = ({ children, padding = 20 }) => {
  return <PaddingDefault padding={padding}>{children}</PaddingDefault>;
};

export default PaddingWrapperDiv;

const PaddingDefault = styled.div<{ padding: number }>`
  padding: 0 ${(props) => `${props?.padding}px`};
`;

import { useState } from "react";
import styled from "styled-components";

const Badgelist = () => {
  const [isCategory, setIsCategory] = useState("exercise");
  return (
    <Wrapper>
      <HeaderWrap>
        {/* sass props 방법 배우기 */}
        {isCategory === "exercise" ? (
          <FocusedCategory onClick={() => setIsCategory("exercise")}>
            운동
          </FocusedCategory>
        ) : (
          <UnFocusedCategory onClick={() => setIsCategory("exercise")}>
            운동
          </UnFocusedCategory>
        )}
        {isCategory === "study" ? (
          <FocusedCategory onClick={() => setIsCategory("study")}>
            공부
          </FocusedCategory>
        ) : (
          <UnFocusedCategory onClick={() => setIsCategory("study")}>
            공부
          </UnFocusedCategory>
        )}
      </HeaderWrap>
      <BadgeListWrap>
        {new Array(15).fill(1).map((index) => (
          <EmptyBadge key={index} />
        ))}
      </BadgeListWrap>
    </Wrapper>
  );
};

export default Badgelist;

const Wrapper = styled.div`
  padding: 14px 20px 0px 20px;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const FocusedCategory = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin: 0px 9px;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

const UnFocusedCategory = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin: 0px 9px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
`;

const BadgeListWrap = styled.div`
  margin-top: 60px;
  display: flex;
  //   justify-content: center;
  flex-wrap: wrap;
`;

const EmptyBadge = styled.div`
  width: 68px;
  height: 68px;
  background: #c4c4c4;
  border-radius: 50%;
  margin: 21px;
`;

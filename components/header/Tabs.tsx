import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderWrapper = styled.div`
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

const Tabs = () => {
  const router = useRouter();
  const { pathname, query } = router;
  return (
    <HeaderWrapper>
      <Link
        href={{
          pathname,
          query: { categoryId: 1 },
        }}
      >
        <Tab selected={!query.categoryId || query.categoryId === "1"}>운동</Tab>
      </Link>
      <Link
        href={{
          pathname,
          query: { categoryId: 2 },
        }}
      >
        <Tab selected={query.categoryId === "2"}>공부</Tab>
      </Link>
    </HeaderWrapper>
  );
};

export default Tabs;

import { NextPage } from "next";
import VideoList from "@components/video/VideoList";
import { HeaderWrapper } from "@components/header/Tabs";
import useVideo from "hooks/video/useVideo";
import styled from "styled-components";
import Link from "next/link";

const index: NextPage = () => {
  const { data, isLoading, fetchNextPage } = useVideo(0, "my");

  return (
    <>
      <HeaderWrapper>마이 비디오</HeaderWrapper>
      <VideoList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
      />
      <FloatingBtn>
        <Overlay />
        <Link href="/myvideos/upload">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 5C13.96 5 5 13.96 5 25C5 36.04 13.96 45 25 45C36.04 45 45 36.04 45 25C45 13.96 36.04 5 25 5Z"
              fill="none"
            />
            <path
              d="M25 5C13.96 5 5 13.96 5 25C5 36.04 13.96 45 25 45C36.04 45 45 36.04 45 25C45 13.96 36.04 5 25 5ZM33 27H27V33C27 34.1 26.1 35 25 35C23.9 35 23 34.1 23 33V27H17C15.9 27 15 26.1 15 25C15 23.9 15.9 23 17 23H23V17C23 15.9 23.9 15 25 15C26.1 15 27 15.9 27 17V23H33C34.1 23 35 23.9 35 25C35 26.1 34.1 27 33 27Z"
              fill="#4D23D6"
            />
          </svg>
        </Link>
      </FloatingBtn>
    </>
  );
};

const FloatingBtn = styled.div`
  position: fixed;
  bottom: 95px;
  margin-left: 315px;
  z-index: 999;
  border-radius: 50%;
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    z-index: 10;
  }
`;

const Overlay = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: white;
`;

export default index;

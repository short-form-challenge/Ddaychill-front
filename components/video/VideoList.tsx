import VideoCard from "./VideoCard";
import { useEffect, useRef } from "react";
import { ListWrapper } from "./style";

import styled from "styled-components";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "react-query";
import { QueryResult } from "interface/video";

interface Props {
  data: InfiniteData<QueryResult> | undefined;
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<QueryResult, unknown>>;
}

const VideoList = ({ data, isLoading, fetchNextPage }: Props) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (
        listRef?.current!.scrollTop + listRef?.current!.clientHeight >
        listRef?.current!.scrollHeight - 300
      ) {
        if (!isLoading) {
          fetchNextPage();
        }
      }
    }
    listRef.current?.addEventListener("scroll", () => {
      onScroll();
    });

    return () => {
      listRef.current?.removeEventListener("scroll", onScroll);
    };
  }, [listRef, data, isLoading]);

  return (
    <ListLayout>
      <ListWrapper ref={listRef}>
        {data?.pages?.map((group) =>
          group.result.map((v) => <VideoCard key={v.id} item={v} />)
        )}
      </ListWrapper>
    </ListLayout>
  );
};

const ListLayout = styled.div`
  -ms-overflow-style: none;
  height: 75vh;
  overflow-y: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default VideoList;

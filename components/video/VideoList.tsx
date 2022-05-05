import VideoCard from "./VideoCard";
import { useEffect, useRef } from "react";
import { ListWrapper } from "./style";
import { QueryResult } from "interface/post";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "react-query";

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
    <ListWrapper ref={listRef}>
      {data?.pages?.map((group) =>
        group.result.map((v) => <VideoCard key={v.id} item={v} />)
      )}
    </ListWrapper>
  );
};

export default VideoList;

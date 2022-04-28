import VideoCard from "./VideoCard";
import { useEffect, useRef } from "react";
import usePost from "hooks/post/usePost";
import { ListWrapper } from "./style";
import { useRouter } from "next/router";

const VideoList = () => {
  const router = useRouter();
  const {
    pathname,
    query: { categoryId },
  } = router;
  console.log(pathname);
  const listRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage } = usePost(
    0,
    categoryId ? +categoryId : 0
  );
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

import VideoCard from "./VideoCard";
import styles from "./video.module.scss";
import { useEffect, useRef } from "react";
import usePost from "hooks/post/usePost";

const VideoList = ({ categoryId = 0 }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage } = usePost(0, categoryId);

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
    <div ref={listRef} className={styles.listWrapper}>
      {data?.pages?.map((group) =>
        group.result.map((v) => <VideoCard key={v.id} item={v} />)
      )}
    </div>
  );
};

export default VideoList;

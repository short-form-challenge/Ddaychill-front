import { getUserVideos } from "apis/post";
import { QueryResult } from "interface/video";
import { useInfiniteQuery } from "react-query";

const useUserVideo = (userId: number) =>
  useInfiniteQuery<QueryResult>(
    ["videos", userId],
    ({ pageParam }) => getUserVideos(userId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );

export default useUserVideo;

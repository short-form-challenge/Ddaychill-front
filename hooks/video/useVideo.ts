import { getVideos } from "apis/post";
import { QueryResult } from "interface/video";
import { useInfiniteQuery } from "react-query";

const usePost = (cateId: number) =>
  useInfiniteQuery<QueryResult>(
    ["videos", cateId],
    ({ pageParam }) => getVideos(cateId, pageParam),
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

export default usePost;

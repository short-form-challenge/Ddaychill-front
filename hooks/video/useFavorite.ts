import { getFavorites } from "apis/videos";
import { QueryResult } from "interface/video";
import { useInfiniteQuery } from "react-query";

const useFavorite = () =>
  useInfiniteQuery<QueryResult>(
    ["favorite"],
    async ({ pageParam }) => getFavorites(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );

export default useFavorite;

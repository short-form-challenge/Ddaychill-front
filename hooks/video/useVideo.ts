import { getFavorites, getMyVideos, getVideos } from "apis/videos";

import { useInfiniteQuery } from "react-query";

const useVideo = (cateId: number = 0, type: "main" | "my" | "liked") => {
  return useInfiniteQuery<any>(
    ["videos", cateId, type],
    ({ pageParam }) => {
      console.log(pageParam);
      return type === "main"
        ? getVideos(cateId, pageParam?.id, pageParam?.showId)
        : type === "my"
        ? getMyVideos(pageParam?.id, pageParam?.showId)
        : getFavorites(pageParam?.id, pageParam?.showId);
    },
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) {
          return lastPage?.nextPage;
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
};

export default useVideo;

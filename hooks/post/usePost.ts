import axios from "axios";
import { QueryResult } from "interface/post";
import { useInfiniteQuery } from "react-query";

const usePost = (userId = 0, cateId = 0) =>
  useInfiniteQuery<QueryResult>(
    ["posts"],
    async ({ pageParam = 0 }) => {
      return await axios
        .get(`/api/posts?userId=${userId}&cate=${cateId}&lastId=${pageParam}`)
        .then((res) => {
          return {
            result: res.data.posts,
            nextPage: res.data.posts[res.data.posts.length - 1].id,
            isLast: res.data.isLast,
          };
        });
    },
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

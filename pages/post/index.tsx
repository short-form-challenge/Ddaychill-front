import PostList from "@components/PostList";
import usePost from "hooks/post/usePost";
import { NextPage } from "next";

const index: NextPage = () => {
  const { data, isLoading, fetchNextPage } = usePost();
  console.log(data?.pages);
  return (
    <div>
      <button
        disabled={isLoading}
        onClick={() => fetchNextPage()}
        type="button"
      >
        {isLoading ? "Loading..." : "데이터호출"}
      </button>
      <PostList list={data?.pages} />
    </div>
  );
};

export default index;

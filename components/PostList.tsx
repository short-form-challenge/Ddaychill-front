import { QueryResult } from "interface/post";
import PostCard from "./PostCard";

interface Props {
  list: QueryResult[] | undefined;
}

const PostList = ({ list }: Props) => {
  return (
    <div>
      {list?.map((group) =>
        group.result.map((v) => <PostCard key={v.id} item={v} />)
      )}
    </div>
  );
};

export default PostList;

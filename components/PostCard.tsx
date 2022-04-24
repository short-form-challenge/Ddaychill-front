import { IPost } from "interface/post";

interface Props {
  item: IPost;
}

const PostCard = ({ item }: Props) => {
  console.log(item);
  return (
    <div>
      <div>
        <img src={item.thumb} />
      </div>
      <div>{item.title}</div>
    </div>
  );
};
export default PostCard;

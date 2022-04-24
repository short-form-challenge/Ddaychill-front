import axios from "axios";
import { IPost } from "interface/post";
import { useQuery } from "react-query";

const usePost = (id: string) => {
  const { data, isLoading } = useQuery<IPost>(
    ["postDetail", id],
    async () => await axios.get(`/api/posts/${id}`).then((res) => res.data),
    { enabled: !!id }
  );
  return { data, isLoading };
};

export default usePost;

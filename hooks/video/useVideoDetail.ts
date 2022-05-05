import { getVideoDetail } from "apis/post";
import { IVideo } from "interface/video";
import { useQuery } from "react-query";

const useVideoDetail = (id: string | undefined) => {
  const { data, isLoading } = useQuery<IVideo>(
    ["videoDetail", id],
    () => getVideoDetail(id),
    { enabled: !!id }
  );
  return { data, isLoading };
};

export default useVideoDetail;

import { getVideoDetail } from "apis/videos";
import { IVideoRes } from "interface/video";
import { useQuery } from "react-query";

const useVideoDetail = (id: string | undefined) => {
  const { data, isLoading } = useQuery<IVideoRes>(
    ["videoDetail", id],
    () => getVideoDetail(id),
    { enabled: !!id }
  );
  return { data, isLoading };
};

export default useVideoDetail;

import axios from "axios";

export const getVideos = async (cateId = 0, pageParam = 0) =>
  await axios
    .get(`/api/videos?cate=${cateId}&lastId=${pageParam}`)
    .then((res) => {
      const {
        data: { videos, isLast },
      } = res;
      return {
        result: videos,
        nextPage: videos[videos.length - 1].id,
        isLast: isLast,
      };
    });

export const getFavorites = async (pageParam = 0) =>
  await axios.get(`/api/videos/favorite?lastId=${pageParam}`).then((res) => {
    const {
      data: { videos, isLast },
    } = res;
    return {
      result: videos,
      nextPage: videos[videos.length - 1].id,
      isLast: isLast,
    };
  });

export const getVideoDetail = async (id: string | undefined) =>
  await axios.get(`/api/videos/${id}`).then((res) => res.data);

export const postToggleLike = async (videoId: string, isLiked: boolean) => {
  console.log(videoId);
  return isLiked
    ? await axios
        .post(`http://3.35.10.54:8080/videos/downLikes/${videoId}/${1}`)
        .then((res) => res.data)
    : await axios
        .post(`http://3.35.10.54:8080/videos/upLikes/${videoId}/${1}`)
        .then((res) => res.data);
};

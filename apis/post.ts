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

export const postToggleLike = async (videoId: string) =>
  await axios.post(`/api/videos/${videoId}/likes`).then((res) => res.data);

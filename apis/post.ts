import axios from "axios";
import { API } from "config";

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

export const getUserVideos = async (userId = 0, pageParam = 0) =>
  await axios
    .get(`/videos?userId=${userId}&lastId=${pageParam}`)
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

export const getVideoDetail = async (id: string | undefined) =>
  await axios.get(`/api/videos/${id}`).then((res) => res.data);

export const postToggleLike = async (videoId: number, isLiked: boolean) => {
  return isLiked
    ? await axios
        .post(`${API}/videos/downLikes/${videoId}/${1}`)
        .then((res) => res.data)
    : await axios
        .post(`${API}/videos/upLikes/${videoId}/${1}`)
        .then((res) => res.data);
};

export const deleteVideo = async (videoId: number) =>
  await axios.delete(`${API}/videos/${videoId}`).then((res) => res.data);

export const postVideo = async (frm: FormData) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) return;
  return await axios.post(`${API}/videos`, frm, {
    headers: {
      "X-AUTH-TOKEN": token,
    },
  });
};

import axios from "axios";
import { API } from "config";

export const getVideos = async (cateId = 0, pageParam = 0, showId = 0) => {
  const token = sessionStorage.getItem("accessToken");
  return await axios
    .get(
      `${API}/videos${
        token ? "" : "/anonymousUsers"
      }?cate=${cateId}&showId=${showId}&lastId=${pageParam}`,
      token
        ? {
            headers: {
              "X-AUTH-TOKEN": token,
            },
          }
        : {}
    )
    .then((res) => {
      const { data, last } = res.data;
      return {
        result: data,
        nextPage: {
          id: data[data.length - 1]?.id,
          showId: data[data.length - 1]?.showId,
        },
        isLast: last,
      };
    });
};

export const getMyVideos = async (pageParam = 0, showId = 0) => {
  const token = sessionStorage.getItem("accessToken");
  return await axios
    .get(
      `${API}/videos/myVideos?cate=1&showId=${showId}&lastId=${pageParam}`,
      token
        ? {
            headers: {
              "X-AUTH-TOKEN": token,
            },
          }
        : {}
    )
    .then((res) => {
      const { data, last } = res.data;
      return {
        result: data,
        nextPage: {
          id: data[data.length - 1]?.id,
          showId: data[data.length - 1]?.showId,
        },
        isLast: last,
      };
    });
};
export const getOtherVideos = async (userId = 0, pageParam = 0, showId = 0) => {
  return await axios
    .get(
      `${API}/videos/otherVideos?userId=${+userId}&showId=${showId}&lastId=${pageParam}`
    )
    .then((res) => {
      const { data, last } = res.data;
      return {
        result: data,
        nextPage: {
          id: data[data.length - 1]?.id,
          showId: data[data.length - 1]?.showId,
        },
        isLast: last,
      };
    });
};

export const getFavorites = async (cateId = 0, pageParam = 0, showId = 0) => {
  const token = sessionStorage.getItem("accessToken");
  return await axios
    .get(
      `${API}/videos/likeVideos?cate=${cateId}&showId=${showId}&lastId=${pageParam}`,
      {
        headers: {
          "X-AUTH-TOKEN": token || "",
        },
      }
    )
    .then((res) => {
      const { data, last } = res.data;
      return {
        result: data,
        nextPage: {
          id: data[data.length - 1]?.id,
          showId: data[data.length - 1]?.showId,
        },
        isLast: last,
      };
    });
};

export const getVideoDetail = async (id: string | undefined) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) return;
  return await axios
    .get(`${API}/videos/${id}`, {
      headers: {
        "X-AUTH-TOKEN": token,
      },
    })
    .then((res) => res.data);
};

export const postToggleLike = async (videoId: number, isLiked: boolean) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) return;
  return isLiked
    ? await axios
        .post(
          `${API}/videos/downLikes/${videoId}`,
          {},
          {
            headers: {
              "X-AUTH-TOKEN": token,
            },
          }
        )
        .then((res) => res.data)
    : await axios
        .post(
          `${API}/videos/upLikes/${videoId}`,
          {},
          {
            headers: {
              "X-AUTH-TOKEN": token,
            },
          }
        )
        .then((res) => res.data);
};

export const deleteVideo = async (videoId: number) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) return;
  return await axios
    .delete(`${API}/videos/${videoId}`, {
      headers: {
        "X-AUTH-TOKEN": token,
      },
    })
    .then((res) => res.data);
};

export const postVideo = async (frm: FormData) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) return;
  return await axios.post(`${API}/videos`, frm, {
    headers: {
      "X-AUTH-TOKEN": token,
    },
  });
};

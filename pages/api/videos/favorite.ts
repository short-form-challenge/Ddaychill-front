import videos from "mooks/videos";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let data = videos.filter((v) => v.user.id === 1 && v.isLiked);
  let isLast = false;
  const lastId = Number(req.query.lastId);
  data = data
    .filter((v) => v.user.id === 1 && v.isLiked)
    .sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 1;
    });

  const idx = lastId
    ? data.findIndex((v) => v.id === Number(req.query.lastId)) + 1
    : 0;

  if (idx + 10 >= data.length - 1) {
    isLast = true;
  }

  data = data.slice(idx, idx + 10);

  res.status(200).json({ videos: data, isLast });
}

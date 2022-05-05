import withHandler from "libs/withHandler";
import videos from "mooks/videos";
import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  let ok = false;
  const data = videos.find((v) => v.id === Number(req.query.id));
  if (data) {
    ok = true;
    data.like = data.isLiked ? data.like - 1 : data.like + 1;
    data.isLiked = !data.isLiked;
  }
  res.status(200).json({ ok });
}

export default withHandler({ methods: ["POST"], handler });

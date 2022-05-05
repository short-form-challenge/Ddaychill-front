import videos from "mooks/videos";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = videos.find((v) => v.id === Number(req.query.id));
  res.status(200).json(data);
}

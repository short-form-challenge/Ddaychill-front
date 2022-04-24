import posts from "mooks/posts";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = posts.find((v) => v.id === Number(req.query.id));
  res.status(200).json(data);
}

import user from "mooks/user";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(user);
  const data = user;

  res.status(200).json(data);
}

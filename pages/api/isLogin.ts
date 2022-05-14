import { NextApiRequest, NextApiResponse } from "next";
import user from "mooks/user";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = user;

  res.statusCode = 200;
  res.json(data[0]);
};

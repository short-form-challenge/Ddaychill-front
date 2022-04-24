import type { NextApiRequest, NextApiResponse } from "next";

const user = {
  id: 1,
  name: "황길성",
  pet: "reo",
  address: "인천",
  hometown: "인천",
  age: 27,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.id);
  res.status(200).json(user);
}

import { NextApiRequest, NextApiResponse } from "next";
import user from "mooks/user";
// 다이나믹 api
export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = user;
  console.log(
    "req⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️",
    req
  );
  console.log("res✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅", res);
  res.statusCode = 200;
  res.json(data[0]);
};

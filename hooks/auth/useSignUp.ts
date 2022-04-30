import axios from "axios";
import { QueryResult } from "interface/post";
import { useQuery } from "react-query";

const useVaildCheck = (text: string, type: "email" | "nickname") =>
  useQuery<QueryResult>(["useVaildCheck", text, type], async () => {
    return await axios
      .get(`/api/auth/${type}?text=${text}`)
      .then((res) => res.data);
  });

export default useVaildCheck;

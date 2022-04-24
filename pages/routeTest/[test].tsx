import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const { test } = router.query;

  return (
    <>
      <h1>쿼리 가져오기: {test}</h1>
      <h2>효진 연습</h2>
      <p>라우트 테스트!!{test}!</p>
    </>
  );
}

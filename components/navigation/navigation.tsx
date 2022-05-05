import { useRouter } from "next/router";
import Link from "next/link";
import style from "./navigation.module.scss";

const Navigation = () => {
  const router = useRouter();
  const tabMenu = router.pathname;

  return (
    <div className={style.navWrapper}>
      <Link href="/">
        <div
          className={`${style.navItem} ${
            tabMenu === "/" || tabMenu.includes("/videos")
              ? style.iconChecked
              : style.icon
          }`}
        >
          <div>
            <span className="material-symbols-rounded">home</span>
          </div>
          <a className={style.home}>홈</a>
        </div>
      </Link>
      <Link href={"/myvideo"}>
        <div
          className={`${style.navItem} ${
            tabMenu === "/videos" ? style.iconChecked : style.icon
          }`}
        >
          <div>
            <span className="material-symbols-rounded">smart_display</span>
          </div>
          <a className={style.home}>마이비디오</a>
        </div>
      </Link>
      <Link href="/favorite">
        <div
          className={`${style.navItem} ${
            tabMenu === "/favorite" ? style.iconChecked : style.icon
          }`}
        >
          <div>
            <span className="material-symbols-rounded">favorite</span>
          </div>
          <a className={style.home}>관심영상</a>
        </div>
      </Link>
      <Link href="/user/mypage">
        <div
          className={`${style.navItem} ${
            tabMenu === "/user/mypage" ? style.iconChecked : style.icon
          }`}
        >
          <div>
            <span className="material-symbols-rounded">person</span>
          </div>
          <a className={style.home}>프로필</a>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;

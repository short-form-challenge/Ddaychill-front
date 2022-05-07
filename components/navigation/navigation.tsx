import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();
  const tabMenu = router.pathname;

  return (
    <NavWrapper>
      <Link href="/">
        <NavItem
          className={
            tabMenu === "/" || tabMenu.includes("/videos")
              ? "iconChecked"
              : "icon"
          }
        >
          <div>
            <span className="material-symbols-rounded">home</span>
          </div>
          <a className="home">홈</a>
        </NavItem>
      </Link>
      <Link href={"/myvideo"}>
        <NavItem className={tabMenu === "/videos" ? "iconChecked" : "icon"}>
          <div>
            <span className="material-symbols-rounded">smart_display</span>
          </div>
          <a className="home">마이비디오</a>
        </NavItem>
      </Link>
      <Link href="/favorite">
        <NavItem className={tabMenu === "/favorite" ? "iconChecked" : "icon"}>
          <div>
            <span className="material-symbols-rounded">favorite</span>
          </div>
          <a className="home">관심영상</a>
        </NavItem>
      </Link>
      <Link href="/user/mypage">
        <NavItem
          className={tabMenu === "/user/mypage" ? "iconChecked" : "icon"}
        >
          <div>
            <span className="material-symbols-rounded">person</span>
          </div>
          <a className="home">프로필</a>
        </NavItem>
      </Link>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  width: inherit;
  padding: 10px 40px 37px 40px;
  font-size: 10px;
  background-color: white;

  .home {
    margin-top: 4px;
  }

  .icon {
    color: #cccccd;
  }
  .iconChecked {
    color: #4d23d6;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    width: 24px;
  }
`;

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "styles/user/mypage.module.scss";

const MyPage: NextPage = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileBG}>
        {!isAuth ? (
          <div className={styles.userInfoWrap}>
            <div className={styles.userPhoto}></div>
            <div className={styles.userNameWrap}>
              <div className={styles.userName}>레오와 두리</div>
              <div className={styles.challengeDay}>Day 6</div>
            </div>
          </div>
        ) : (
          <div className={styles.loginMenuWrap}>
            <div
              className={styles.loginButton}
              onClick={() => router.push("./login")}
            >
              로그인
            </div>
            <div
              className={styles.loginButton}
              onClick={() => router.push("./join")}
            >
              회원가입
            </div>
          </div>
        )}
        <div className={styles.challengeStatus}>
          {isAuth
            ? "레오와 두리님 거의 다 왔어요! 힘내보아요!"
            : "Dday Chill 과 함께 목표 달성을 해보는건 어떠세요?"}
        </div>
        <div className={styles.challengeCntWrap}>
          <div className={styles.cntWrap}>
            <div className={styles.cntLable}>목표 달성</div>
            <div className={styles.cntNumber}>7</div>
          </div>
          <div className={styles.cntLine}></div>
          <div className={styles.cntWrap}>
            <div className={styles.cntLable}>진행중인 목표</div>
            <div className={styles.cntNumber}>1</div>
          </div>
        </div>
      </div>
      <div className={styles.menuWrap}>
        <div className={styles.menuItem} onClick={() => router.push("./edit")}>
          <div className={styles.menuText}>내 계정</div>
          <div className={styles.arrowIcon}>
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </div>
        </div>
        <div
          className={styles.menuItem}
          onClick={() => router.push("./badgelist")}
        >
          <div className={styles.menuText}>뱃지 현황</div>
          <div className={styles.arrowIcon}>
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </div>
        </div>
        <div className={styles.accountMenuWrap}>
          <div className={styles.accountMenu}>
            <div className={styles.accountMenuText}>탈퇴하기</div>
            <div className={styles.accountLine}></div>
            <div className={styles.accountMenuText}>로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

import { NextPage } from "next";
import styles from "styles/user/mypage.module.scss";

const MyPage: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileBG}>
        <div className={styles.userInfoWrap}>
          <div className={styles.userPhoto}></div>
          <div className={styles.userNameWrap}>
            <div className={styles.userName}>레오와 두리</div>
            <div className={styles.challengeDay}>Day 6</div>
          </div>
        </div>
        <div className={styles.challengeStatus}>
          레오와 두리님 거의 다 왔어요! 힘내보아요!
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
        <div className={styles.menuItem}>
          <div className={styles.menuText}>내 계정</div>
          <div className={styles.arrowIcon}>{">"}</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuText}>뱃지 현황</div>
          <div className={styles.arrowIcon}>{">"}</div>
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
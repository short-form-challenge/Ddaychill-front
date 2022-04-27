import VideoList from "@components/video/VideoList";
import styles from "styles/profile/profile.module.scss";

const Profile = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.backArrowIcon}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </div>
        <div className={styles.userInfoWrap}>
          <div className={styles.userPhoto}></div>
          <div className={styles.userName}>레오와 두리</div>
        </div>
        <div className={styles.tagWrap}>
          <span className={styles.categoryTag}>#운동</span>
          <span className={styles.categoryTag}>#공부</span>
          <span className={styles.dayTag}>Day 1</span>
        </div>
      </div>
      <VideoList />
    </>
  );
};

export default Profile;

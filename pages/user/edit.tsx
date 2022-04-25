import { NextPage } from "next";
import styles from "styles/user/profileModify.module.scss";

const ProfileModify: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.goBackButton}>{"<"}</div>
        <div className={styles.screenName}>내 정보 수정</div>
        <div className={styles.saveButton}>저장</div>
      </div>
      <div className={styles.imageWrap}>
        <div className={styles.profileImage}>
          <div className={styles.modifyImageButton}>
            <div className={styles.modifyImageButtonText}>편집</div>
          </div>
        </div>
      </div>
      <div className={styles.modifyInputWrap}>
        <div className={styles.inputItem}>
          <div className={styles.inputLable}>닉네임</div>
          <input
            className={styles.modifyInput}
            placeholder="닉네임을 적어주세요"
          ></input>
        </div>
        <div className={styles.inputItem}>
          <div className={styles.inputLable}>가입 이메일</div>
          <input
            className={styles.modifyInput}
            placeholder="Ddaychill@gmail.com"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ProfileModify;

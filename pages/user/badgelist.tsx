import { useState } from "react";
import styles from "styles/user/badgelist.module.scss";

const Badgelist = () => {
  const [isCategory, setIsCategory] = useState("exercise");
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrap}>
        {/* sass props 방법 배우기 */}
        {isCategory === "exercise" ? (
          <span
            className={styles.focusedCategory}
            onClick={() => setIsCategory("exercise")}
          >
            운동
          </span>
        ) : (
          <span
            className={styles.unFocusedCategory}
            onClick={() => setIsCategory("exercise")}
          >
            운동
          </span>
        )}
        {isCategory === "study" ? (
          <span
            className={styles.focusedCategory}
            onClick={() => setIsCategory("study")}
          >
            공부
          </span>
        ) : (
          <span
            className={styles.unFocusedCategory}
            onClick={() => setIsCategory("study")}
          >
            공부
          </span>
        )}
      </div>
      <div className={styles.badgeListWrap}>
        {new Array(15).fill(1).map((index) => (
          <div key={index} className={styles.emptyBadge} />
        ))}
      </div>
    </div>
  );
};

export default Badgelist;

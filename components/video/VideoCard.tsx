import { IPost } from "interface/post";
import styles from "./video.module.scss";

interface Props {
  item: IPost;
}

const VideoCard = ({ item }: Props) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        {/* <img src={item.thumb} /> */}
        <img
          src="https://i.pinimg.com/originals/33/ba/3a/33ba3ace628b4ca03ec66a2696bc78c6.jpg"
          alt=""
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.mainContent}>
          <h3>{item.title}</h3>
          <span>2022.04.22</span>
        </div>
        <div className={styles.subContent}>
          <span className="material-symbols-rounded liked">favorite</span>
          <span className={styles.likeCount}>{item.like}개</span>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;

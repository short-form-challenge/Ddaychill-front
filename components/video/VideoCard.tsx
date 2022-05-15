import { API } from "config";
import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import Link from "next/link";
import {
  CardWrapper,
  Contents,
  ImgWrapper,
  MainContent,
  SubContent,
} from "./style";

interface Props {
  item: IVideo;
}

const VideoCard = ({ item }: Props) => {
  return (
    <Link key={item.id} href={`/videos/${item.id}`}>
      <CardWrapper>
        <ImgWrapper>
          <img src={`${API}${item.thumbnailPath}`} />
        </ImgWrapper>
        <Contents>
          <MainContent>
            <h3>{item.title}</h3>
            <span>{item.postedAt.split("T")[0].replace("-", ".")}</span>
          </MainContent>
          <SubContent>
            <span
              className={cls(
                "material-symbols-rounded",
                item.isLiked ? "liked" : "unliked"
              )}
            >
              favorite
            </span>
            <span className="likeCount">{item.likeCnt}개</span>
          </SubContent>
        </Contents>
      </CardWrapper>
    </Link>
  );
};
export default VideoCard;

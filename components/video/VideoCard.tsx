import Modal from "@components/modal/Modal";
import { API } from "config";
import { IVideo } from "interface/video";
import { cls } from "libs/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setHasToken(true);
    }
  }, []);
  return (
    <>
      {showModal && (
        <Modal
          subConfirm="아니오"
          mainConfirm="예"
          onClickSubConfirm={() => {
            setShowModal(false);
            router.push("/");
          }}
          onClickMainCofirm={() => {
            setShowModal(false);
            router.push("/auth/login");
          }}
        >
          <div>로그인을 통해 소통을 시작해보세요.</div>
        </Modal>
      )}
      <Link key={item.id} href={hasToken ? `/videos/${item.id}` : "#"}>
        <CardWrapper
          onClick={() => {
            if (!hasToken) {
              setShowModal(true);
            }
          }}
        >
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
    </>
  );
};
export default VideoCard;

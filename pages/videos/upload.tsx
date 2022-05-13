import { useState } from "react";

import BackButtonHeader from "@components/header/BackButtonHeader";
import Modal from "@components/modal/Modal";
import { useRouter } from "next/router";
import UploadForm from "@components/video/UploadForm";

const Upload = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  function onClickToggleModal() {
    setIsModalVisible((prev) => !prev);
  }

  return (
    <>
      <BackButtonHeader
        isBackButton={true}
        text="영상 업로드"
        onClickBackButton={onClickToggleModal}
      />
      <UploadForm />
      {isModalVisible && (
        <Modal
          mainConfirm="아니오"
          subConfirm="예"
          onClickMainCofirm={onClickToggleModal}
          onClickSubConfirm={() => router.back()}
        >
          영상 업로드를 취소하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default Upload;

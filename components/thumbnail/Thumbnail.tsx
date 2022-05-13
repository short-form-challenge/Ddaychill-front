import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  videoUrl: string;
  getImages: (file: File) => void;
  filename: string;
  newThumbnail?: string;
}

function Thumbnail({ videoUrl, getImages, filename, newThumbnail }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [thumbnail, setThumbnail] = useState("");

  const srcToFile = async (src: string, fileName: string, mimeType: string) => {
    const res = await fetch(src);
    const buf = await res.arrayBuffer();
    return new File([buf], fileName, { type: mimeType });
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      setTimeout(() => {
        if (videoRef.current) {
          const canvas = document.createElement("canvas");
          canvas.width = videoRef.current!.videoWidth;
          canvas.height = videoRef.current!.videoHeight;

          const context = canvas.getContext("2d");
          context?.drawImage(
            videoRef.current!,
            0,
            0,
            canvas.width,
            canvas.height
          );
          const url = canvas.toDataURL("image/jpeg");
          setThumbnail(url);
          srcToFile(url, filename, "image/jpeg").then((file) =>
            getImages(file)
          );
        }
      }, 200);
    }
  }, [videoRef]);

  return (
    <VideoWrapper>
      {thumbnail ? (
        newThumbnail ? (
          <img src={newThumbnail} />
        ) : (
          <img src={thumbnail} />
        )
      ) : (
        <video ref={videoRef}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </VideoWrapper>
  );
}

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
  height: 100%;
  img,
  video {
    height: 100%;
    object-fit: cover;
  }
`;

export default Thumbnail;

import { useRef, useEffect } from "react";

function Thumbnail({ videoUrl }: { videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      setTimeout(() => {
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
        console.log(url);
      }, 100);
    }
  }, [videoRef]);

  // return (
  //   <video ref={videoRef}>
  //     <source src={videoUrl} type="video/mp4" />
  //   </video>
  // );
}

export default Thumbnail;

// import { useRef } from "react";

// interface Props {
//   videoUrl: string;
// }

// const Thumbnail = ({ videoUrl }: Props) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const videoRef = useRef(null);

//   const getSnapShot = () => {
//     try {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       canvas.height = video.videoHeight;
//       canvas.width = video.videoWidth;

//       // resize thumbnail or no ?
//       if (!width || !height) {
//         canvas.getContext("2d").drawImage(video, 0, 0);
//       } else {
//         canvas.getContext("2d").drawImage(video, 0, 0, width, height);
//       }

//       const thumbnail = canvas.toDataURL("image/png");

//       // Remove video & canvas elements (no longer needed)
//       video.src = ""; // setting to empty string stops video from loading
//       video.remove();
//       canvas.remove();

//       setState({
//         snapshot: thumbnail,
//       });

//       // pass the thumbnail url back to parent component's thumbnail handler (if any)
//       if (this.state.thumbnailHandler) {
//         this.state.thumbnailHandler(thumbnail);
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="react-thumbnail-generator" style={{ height: "220px" }}>
//       <canvas
//         className="snapshot-generator"
//         style={{ height: "220px" }}
//         ref={canvasRef}
//       ></canvas>
//       <video
//         muted
//         className="snapshot-generator"
//         ref={videoRef}
//         src={videoUrl}
//         onLoadedMetadata={() => this.setState({ metadataLoaded: true })}
//         onLoadedData={() => this.setState({ dataLoaded: true })}
//         onSuspend={() => this.setState({ suspended: true })}
//         onSeeked={() => this.setState({ seeked: true })}
//       ></video>
//     </div>
//   );
// };

// export default Thumbnail;

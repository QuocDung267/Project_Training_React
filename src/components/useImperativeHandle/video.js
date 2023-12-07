import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "../video/video1.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  //nhận ref từ forwardRef và callback
  useImperativeHandle(ref, () => ({
    //tạo ra method bên ngoài cần
    play() {
      videoRef.current.play();
    },
    pause() {
        videoRef.current.pause();
      },
  }));
  return <video ref={videoRef} width={280} src={video1} />;
}
export default forwardRef(Video);
//lúc này forwarRef sẽ nhận properties, xong forwarRef nhân video qua đối số thứ 2

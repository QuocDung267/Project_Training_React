import { useRef } from "react";
import Video from "./video";

function UseImperativeHandle() {
  const videoRef = useRef();
  console.log(videoRef.current);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default UseImperativeHandle;

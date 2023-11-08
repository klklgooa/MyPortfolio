import { useState } from "react";
import visions from "./Data/visions";
import "./CSS/Vision.css";

function Vision() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="vision">
      {visions.map((vision, index) => (
        <button onClick={contentChange} value={index}>
          {vision.tab}
        </button>
      ))}
      {visions[index].content}
    </div>
  );
}

export default Vision;

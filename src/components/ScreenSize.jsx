import React from "react";
import useWindowSize from "../Hooks/useWindowSize";
function ScreenSize() {
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Screen Size:</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}

export default ScreenSize;

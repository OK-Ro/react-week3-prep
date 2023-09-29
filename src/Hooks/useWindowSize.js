import { useEffect, useState, useDebugValue } from "react";

// A custom hook that returns the window size as an object
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Define a handler function that updates the state with the new window size
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeights,
    });
  }

  // Use useEffect to register and unregister the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useDebugValue("useWindowSize");

  return windowSize;
}

export default useWindowSize;

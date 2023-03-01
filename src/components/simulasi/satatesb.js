import React, { useState, useEffect } from "react";

export default ()=> {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState((window.innerHeight - (window.innerHeight*13/100)));

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <iframe
        title="States of Matter Basics"
        src="/states.html"
        width={width}
        height={height}
        allowFullScreen
      />
    </div>
  );
}

import { useState, useEffect } from "react";

const useMousePosition = (isHovered, sectionRef) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      if (sectionRef.current) {
        const { offsetWidth, offsetHeight } = sectionRef.current;
        setMousePosition({ x: offsetWidth / 2, y: offsetHeight / 2 });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", updateMousePosition);
    } else {
      handleMouseLeave(); // Center mask when not hovered
    }

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isHovered, sectionRef]);

  return mousePosition;
};

export default useMousePosition;

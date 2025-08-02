import { useEffect, useState } from "react";
import "./FloatingImage.css";

const FloatingImage = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const top = Math.random() * (window.innerHeight - 100);
      const left = Math.random() * (window.innerWidth - 100);
      setPosition({ top, left });
    };

    updatePosition();
    const interval = setInterval(updatePosition, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src="\public\jirachi.png" 
      alt="Floating"
      className="floating-img"
      style={{ top: position.top, left: position.left }}
    />
  );
};

export default FloatingImage;

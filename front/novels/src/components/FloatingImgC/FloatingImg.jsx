import { useEffect, useState, useRef } from "react";
import "./FloatingImg.css";

const FloatingImage = () => {
 
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetPos = useRef({ top: 0, left: 0 });
  const currentPos = useRef({ top: 0, left: 0 });
  const animationFrameId = useRef(null);
  const speed = 0.8; 

  const generateTargetPosition = () => ({
    top: Math.random() * (window.innerHeight - 100), 
    left: Math.random() * (window.innerWidth - 100), 
  });

  useEffect(() => {
  
    const initialPos = generateTargetPosition();
    currentPos.current = initialPos;       
    targetPos.current = generateTargetPosition();  
    setPosition(initialPos);              
    
    const animate = () => {
      const dx = targetPos.current.left - currentPos.current.left;
      const dy = targetPos.current.top - currentPos.current.top;
      const distance = Math.sqrt(dx * dx + dy * dy);

      
      if (distance < 2) {
        targetPos.current = generateTargetPosition();
      } else {
       
        const vx = (dx / distance) * speed;
        const vy = (dy / distance) * speed;
        currentPos.current.left += vx;
        currentPos.current.top += vy;

    
        setPosition({ top: currentPos.current.top, left: currentPos.current.left });
      }

      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);

    
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return (
    <img
      src="/jirachi.png"
      alt="Floating"
      className="floating-img"
     
      style={{ top: position.top, left: position.left, position: "fixed" }}
    />
  );
};

export default FloatingImage;

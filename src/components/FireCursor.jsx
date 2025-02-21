import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const FireCursor = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  useEffect(() => {
    // Check if the device has touch capabilities
    const detectTouchDevice = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };

    detectTouchDevice();

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
      if (!hasMoved) setHasMoved(true);
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);

      const animateCircles = () => {
        let { x, y } = coords.current;

        circlesRef.current.forEach((circle, index) => {
          if (!circle) return;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle?.x - x) * 0.3 || 0;
          y += (nextCircle?.y - y) * 0.3 || 0;

          gsap.to(circle, {
            x: x - 12,
            y: y - 12,
            scale: (circlesRef.current.length - index) / circlesRef.current.length,
            duration: 0.1,
          });

          circle.x = x;
          circle.y = y;
        });

        requestAnimationFrame(animateCircles);
      };

      if (hasMoved) {
        animateCircles();
      }
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [hasMoved, isTouchDevice]);

  return (
    <>
      {!isTouchDevice && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {hasMoved && colors.map((color, i) => (
            <div
              key={i}
              ref={(el) => (circlesRef.current[i] = el)}
              className="circle absolute w-8 h-8 rounded-full"
              style={{
                backgroundColor: color,
                opacity: 0.7,
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

export default FireCursor;

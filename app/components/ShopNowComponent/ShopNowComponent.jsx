import React, { useState, useRef } from "react";
import "./ShopNowComponent.css";

export default function ShopNowComponent() {
  const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="shopnow">
      <div
        className="shop-now-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <h1>Shop Now Component</h1>
        <div
          className="cursor-follower"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          <a href="/shop-now" target="_blank">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

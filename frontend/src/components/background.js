import React, { useState, useEffect } from "react";
import bg1 from "./assets/images/background_1.jpg";
import bg2 from "./assets/images/background_2.jpg";
import bg3 from "./assets/images/background_3.jpeg";

export default function BackgroundSlideshow({ children, interval = 5000 }) {
  const imagens = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, interval);
    return () => clearInterval(timer);
  }, [imagens.length, interval]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {imagens.map((img, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#00000066",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
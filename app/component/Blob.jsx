"use client";
import React, { useEffect, useState } from "react";

export default function Blob(props) {
  const [balls, setBalls] = useState([]);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [property, setProperty] = useState("Repel");

  useEffect(() => {
    console.log(props.ref.current.offsetHeight,props.ref.current.offsetWidth)
    const maxX = props.ref.current.offsetWidth - 3;
    const maxY = props.ref.current.offsetHeight - 20;
    const centerX = props.ref.current.offsetWidth / 2;
    const centerY = props.ref.current.offsetHeight / 2;
    for (let i = 0; i <= 200; i++) {
      let angle = Math.random() * Math.PI * 2;
      let radius = Math.random() * 1000;

      let ball = {
        x: Math.min(Math.max(0, centerX + Math.cos(angle) * radius), maxX),
        y: Math.min(Math.max(0, centerY + Math.sin(angle) * radius), maxY),

        baseX: centerX + Math.cos(angle) * radius,
        baseY: centerY + Math.sin(angle) * radius,

        vx: 0,
        vy: 0,
      };

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBalls((prev) => [...prev, ball]);
    }

    
  }, []);

  useEffect(() => {
  const handleMouseMove = (e) => {
    const rect = props.ref.current.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  

  useEffect(() => {
    // Max Width And Heigth
    const interval = setInterval(() => {
      const maxX = props.ref.current.offsetWidth - 3;
      const maxY = props.ref.current.offsetHeight - 3;

      // Repel Logic
      if (property === "Repel") {
        setBalls((prevBalls) => {
          let newBalls = [];
          prevBalls.forEach((ball) => {
            const dx = ball.x - mouse.x;
            const dy = ball.y - mouse.y;

            const distance = Math.sqrt(dx * dx + dy * dy);
            const mouseRadius = 100;

            if (distance < mouseRadius && distance > 0) {
              const directionX = dx / distance;
              const directionY = dy / distance;

              ball.vx += directionX * Math.random() * 10;
              ball.vy += directionY * Math.random() * 10;
            }

            ball.vx *= 0.9;
            ball.vy *= 0.9;

            ball.x += ball.vx;
            ball.y += ball.vy;

            if (ball.x <= 0) {
              ball.x = 0;
              ball.vx = -ball.vx;
            }

            if (ball.x >= maxX) {
              ball.x = maxX;
              ball.vx = -ball.vx;
            }

            if (ball.y <= 0) {
              ball.y = 0;
              ball.vy = -ball.vy;
            }

            if (ball.y >= maxY) {
              ball.y = maxY;
              ball.vy = -ball.vy;
            }
            newBalls.push(ball);
          });

          return newBalls;
        });
      } else {
        setBalls((prevBalls) => {
          let newBalls = [];
          prevBalls.forEach((ball) => {
            const dx = mouse.x - ball.x;
            const dy = mouse.y - ball.y;

            const distance = Math.sqrt(dx * dx + dy * dy);
            const mouseRadius = 100;

            if (distance < mouseRadius && distance > 0) {
              const directionX = dx / distance;
              const directionY = dy / distance;

              ball.vx += directionX * Math.random() * 10;
              ball.vy += directionY * Math.random() * 10;
            }

            ball.vx *= 0.9;
            ball.vy *= 0.9;

            ball.x += ball.vx;
            ball.y += ball.vy;

            if (ball.x <= 0) {
              ball.x = 0;
              ball.vx = -ball.vx;
            }

            if (ball.x >= maxX) {
              ball.x = maxX;
              ball.vx = -ball.vx;
            }

            if (ball.y <= 0) {
              ball.y = 0;
              ball.vy = -ball.vy;
            }

            if (ball.y >= maxY) {
              ball.y = maxY;
              ball.vy = -ball.vy;
            }

            newBalls.push(ball);
          });

          return newBalls;
        });
      }
    }, 2);

    return () => clearInterval(interval);
  }, [property, mouse]);

  return (
    <>
      {/* <button
        style={{
          position: "relative",
          top: "10px",
          width: "70px",
          height: "40px",
          padding: "10px",
          left: "48%",
          borderRadius: "10px",
          border: "1px solid black",
        }}
        onClick={() => setProperty(property === "Repel" ? "Attract" : "Repel")}
      >
        {property}  
      </button> */}

      {balls.length > 0 &&
        balls.map((ball, idx) => {
          return (
            <div
              key={idx}
              className="ball"
              style={{
                position: "absolute",
                left: ball.x,
                top: ball.y,
                backgroundColor: "black",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                zIndex: 2,
              }}
            ></div>
          );
        })}
    </>
  );
}

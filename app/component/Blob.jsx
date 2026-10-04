import React, { useEffect, useState } from "react";

export default function Blob() {

    const [balls, setBalls] = useState([])
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    })
    const [property, setProperty] = useState("Repel")


    useEffect(() => {
        const maxX = window.innerWidth - 20;
        const maxY = window.innerHeight - 20;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        for (let i = 0; i <= 100; i++) {

            let angle = Math.random() * Math.PI * 2;
            let radius = Math.random() * 100;

            let ball = {

                x: Math.min(Math.max(0, centerX + Math.cos(angle) * radius), maxX),
                y: Math.min(Math.max(0, centerY + Math.sin(angle) * radius), maxY),

                baseX: centerX + Math.cos(angle) * radius,
                baseY: centerY + Math.sin(angle) * radius,

                vx: 0,
                vy: 0,
            }

            setBalls((prev) => [...prev, ball])
        }

        window.addEventListener("mousemove", (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            })
        })
        return () => window.removeEventListener("mousemove", (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            })
        })
    }, [])



    useEffect(() => {
        // Max Width And Heigth
        const interval = setInterval(() => {

            const maxX = window.innerWidth - 20;
            const maxY = window.innerHeight - 20;

            // Repel Logic
            if (property === "Repel") {
                setBalls((prevBalls) => {
                    let newBalls = []
                    prevBalls.forEach((ball) => {


                        const dx = ball.x - mouse.x;
                        const dy = ball.y - mouse.y;

                        const distance = Math.sqrt(dx * dx + dy * dy)
                        const mouseRadius = 100;

                        if (distance < mouseRadius && distance > 0) {

                            const directionX = dx / distance;
                            const directionY = dy / distance;

                            ball.vx += directionX * Math.random() * 10;
                            ball.vy += directionY * Math.random() * 10;
                        }

                        ball.vx *= 0.90;
                        ball.vy *= 0.90;

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
                        newBalls.push(ball)

                    })

                    return newBalls
                })
            }
            else {
                setBalls((prevBalls) => {
                    let newBalls = []
                    prevBalls.forEach((ball) => {


                        const dx = mouse.x - ball.x;
                        const dy = mouse.y - ball.y;

                        const distance = Math.sqrt(dx * dx + dy * dy)
                        const mouseRadius = 100;

                        if (distance < mouseRadius && distance > 0) {

                            const directionX = dx / distance;
                            const directionY = dy / distance;

                            ball.vx += directionX * Math.random() * 10;
                            ball.vy += directionY * Math.random() * 10;
                        }

                        ball.vx *= 0.90;
                        ball.vy *= 0.90;

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

                        newBalls.push(ball)

                    })

                    return newBalls
                })
            }
        }, 2);

        return () => clearInterval(interval)
    }, [property, mouse])

    return (
        <>
            <button
                style={{
                    position: "relative",
                    top: "10px",
                    width: "70px",
                    height: "40px",
                    padding: "10px",
                    left: "48%",
                    borderRadius: "10px",
                    border: "1px solid black"

                }}
                onClick={() => setProperty(property === "Repel" ? "Attract" : "Repel")}
            >{property}</button>

            {balls.length > 0 && balls.map((ball, idx) => {

                return (
                    <div key={idx} className="ball" style={{
                        position: "absolute",
                        left: ball.x,
                        top: ball.y,
                        // backgroundColor: "linear gradient(blue,yellow)",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        zIndex: -1
                    }}></div>
                )
            })}



        </>
    );
}
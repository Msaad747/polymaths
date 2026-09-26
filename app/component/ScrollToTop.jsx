"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [style, setStyle] = useState({
    rotate: "180deg",
    position: "fixed",
    bottom: "50px",
    right: "60px",
    display: `none`,
    transition: `all .3s ease`,
    color: `#171717`,
    backgroundColor: `#F4F1EA`,
    cursor: `pointer`,
    boxShadow:` -2px -2px 10px grey`
  });

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setStyle({ ...style, display: `flex` });
      } else {
        setStyle({ ...style, display: `none` });
      }
    }

    window.addEventListener("scroll", handleScroll);
handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className="scroll-top"
      style={style}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      
    >
      ↓
    </div>
  );
}

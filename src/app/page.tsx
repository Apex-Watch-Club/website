"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// for wiggle
const MAX_DEGREES = 90;

export default function Home() {
  const cardRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.onmousemove = function (event) {
      if (!cardRef.current) return;
      var mouseX = event.pageX / window.innerWidth;
      var mouseY = event.pageY / window.innerHeight;
      var yDegrees = mouseX * MAX_DEGREES - 0.5 * MAX_DEGREES;
      var xDegrees = -0.5 * (mouseY * MAX_DEGREES - 0.5 * MAX_DEGREES);

      cardRef.current.style.transform =
        "rotateY(" + yDegrees + "deg) rotateX(" + xDegrees + "deg)";
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-w-screen min-h-screen bg-gradient-radial p-8">
      <img
        ref={cardRef}
        className="drop-shadow-lg w-full max-w-[400px] h-auto"
        src="/nft.png"
        alt="Apex Watch Club VIP NFT"
      />
      <h1 className="text-lg text-luxury-black">Coming Soon.</h1>
    </main>
  );
}

"use client";

import Image from "next/image";
import NET from "vanta/dist/vanta.net.min";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);

  useEffect(() => {
    const tryVanta = () => {
      if (!vantaEffect) {
        try {
          setVantaEffect(
            NET({
              el: myRef.current,
              gyroControls: true,
              mouseControls: false,
              touchControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x325f32,
              backgroundColor: 0x0,
              points: 18.0,
              maxDistance: 35.0,
              spacing: 16.0,
              showDots: false,
            })
          );
        } catch (err) {
          console.log("vanta scripts not ready. Trying again in a second");
          setTimeout(tryVanta, 1000);
        }
      }
    };

    tryVanta();

    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <main
        ref={myRef}
        className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24"
      >
        <h1 className="text-8xl mb-4 text-center">Pick a Site</h1>
        <div className="flex flex-col justify-center space-y-6 text-xl pt-8 md:flex-row md:w-[750px] md:space-x-6 md:space-y-0">
          <button className="md:w-1/2 bg-black/40 p-2 border rounded-lg inline-flex items-center text-white p-8">
            <Image
              className="mr-6"
              src="/alex-gif-1.gif"
              width={42}
              height={42}
              alt="Artist Page Icon"
            />
            Alex Frad Artist Page
          </button>
          <button className="md:w-1/2 bg-black/40 p-2 border rounded-lg inline-flex items-center text-white p-8">
            <Image
              className="mr-6"
              src="/alex-gif-2.gif"
              width={42}
              height={42}
              alt="Software Engineering Icon"
            />
            Engineering Profile
          </button>
        </div>
      </main>
    </>
  );
}

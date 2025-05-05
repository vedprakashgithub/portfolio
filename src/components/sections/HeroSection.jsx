import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../../components/Button";

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const Hero = () => {
  const heroRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  // GSAP fade animation
  useGSAP(() => {
    gsap.fromTo(
      heroRef.current.querySelectorAll(".hero-text h1"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Auto-slide words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentIndex];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-20 pt-20"
    >
      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-6 z-10">
        <div className="text-4xl md:text-6xl font-bold leading-tight hero-text">
          <h1 className="flex items-center gap-3">
            Shaping{" "}
            <span className="flex items-center gap-2">
              <img
                src={currentWord.imgPath}
                alt={currentWord.text}
                className="w-10 h-10 p-1 rounded-full bg-white"
              />
              <span>{currentWord.text}</span>
            </span>
          </h1>
          <h1>into Real Projects</h1>
          <h1>that Deliver Results</h1>
        </div>

        <p className="text-white/70 text-lg max-w-lg">
          Hi, I’m Ved Prakash, a developer based in India with a passion for code.
        </p>

        <Button
          text="SEE MY WORK"
          className="bg-blue-100 text-black rounded-md md:w-80 w-60 h-14 hover:bg-blue-200 transition-all"
        />
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src="/images/hero-pc.png"
          alt="Hero Visual"
          className="max-w-[500px] w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;

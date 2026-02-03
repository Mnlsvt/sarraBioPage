"use client";

import { useEffect, useState } from "react";

// import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import { Navbar} from "@/components/ui/navbar";

import { useInView } from 'react-intersection-observer'; // Lazy Load

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas"; // Pixelated Image

import { Meteors } from "@/components/ui/meteors"; // Meteors Effect

import { FlipWords } from "@/components/ui/flip-words"; // Flip Words Effect

import { PinContainer } from "@/components/ui/3d-pin"; // Pin Container

import Experience from "@/components/ui/experience";



// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };

// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Lamp Header
function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-[#dedcd9] md:text-7xl"
      >
        Hi, <span className="text-[#F5C9B0]">Sarra</span> here <br /> welcome to my page <span className="text-[#F5C9B0]">:)</span>
      </motion.h1>
    </LampContainer>
  );
}

 // Meteors
export function MeteorsDemo() {
  return (
    <div className="w-full">
      <div className="relative w-full">
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-[#0B3542] px-4 py-8">
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full mb-50">
          </div>
  
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white]">
          
          </h1>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}


// Pixelated Image
export function PixelatedCanvasDemo() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
        src="/dna2.png"
        width={typeof window !== 'undefined' && window.innerWidth < 640 ? 300 : 500}
        height={typeof window !== 'undefined' && window.innerWidth < 640 ? 400 : 600}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#0B3542"
        dropoutStrength={0.4}
        interactive
        distortionStrength={5}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#0B3542"
        tintStrength={0.2}
        className="rounded-xl w-full h-auto max-w-sm sm:max-w-md md:max-w-2xl"
      />
    </div>
  );
}


// Flip Words Effect
export function FlipWordsDemo() {
  const words = [
    "hematology",
    "working with medical data",
    "helping people",
    "medical research & AI",
  ];

  return (
    <div className="h-[30rem] flex justify-center items-center px-4">
      <div 
        className="
          mx-auto font-normal text-neutral-600 dark:text-neutral-400
          text-2xl
          sm:text-xl
          md:text-3xl
          lg:text-4xl
          text-center
        "
      >
        I love{" "}
        <FlipWords words={words} />
      </div>
    </div>
  );
}



// Pin Container
export function AnimatedPinDemo() {
  return (
    <div className="h-[32rem] md:h-[40rem] w-full flex items-center justify-center px-4">
      <PinContainer
        title="My Resume ↪"
        href="/cv"
      >
        <div className="
          flex flex-col items-center text-center
          p-4 tracking-tight text-slate-100/50
          w-[240px] sm:w-[280px] md:w-[320px]
        ">

          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
            My Resume
          </h3>
            <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Click here to check out my resume.
            </span>
            <Image
              src="/sarraki.png"
              alt="Pin container image"
              width={240}
              height={240}
              className="
                mx-auto mt-3 
                rounded-full 
                object-cover 
                w-[140px] h-[140px] 
                sm:w-[180px] sm:h-[180px]
                md:w-[220px] md:h-[220px]
              "
            />

            </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        </div>
      </PinContainer>
    </div>
  );
}

// DNA Carousel
function DNAMarquee() {
  const sequence =
    "GTCAAATTCCAGTGAACCTTAGGCTAATGCCGTTAACCGGTTAAACCCGGGTTAA";

  const colors: Record<string, string> = {
    A: "#F5C9B0",
    T: "#7CFFCB",
    C: "#FF6B6B",
    G: "#FFD93D",
  };

  const longSequence = `${sequence} • ${sequence} • ${sequence}`;

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <div
      className="dna-wrapper py-10 bg-[#0B3542]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouseX((e.clientX - rect.left) / rect.width - 0.5);
        setMouseY((e.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="dna-track">
        <div className="dna-row">
          {longSequence.split("").map((letter, i) => (
            <span
              key={i}
              style={{
                color: colors[letter] || "white",
                transform: `
                  translateY(${Math.sin(i * 0.5) * 20 + mouseY * 40}px)
                  translateX(${mouseX * 15}px)
                  rotate(${Math.sin(i * 0.3) * 8 + mouseX * 10}deg)
                `,
              }}
              className="dna-letter"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="dna-row">
          {longSequence.split("").map((letter, i) => (
            <span
              key={"dup-" + i}
              style={{
                color: colors[letter] || "white",
                transform: `
                  translateY(${Math.sin(i * 0.5) * 20 + mouseY * 40}px)
                  translateX(${mouseX * 15}px)
                  rotate(${Math.sin(i * 0.3) * 8 + mouseX * 10}deg)
                `,
              }}
              className="dna-letter"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}







// const generatedWords = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const generatedWords = `I am a Biomedical Sciences graduate with an educational background and
practical laboratory experience in both academic and clinical settings.
Advancing the field of oncology by using cutting-edge research
approaches, such as personalized diagnostic and treatment techniques, is
my major aim.`

export default function HomePage() {

  // Lazy Load
  const { ref: tooltipRef, inView: tooltipInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: pixelatedRef, inView: pixelatedView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textGenRef, inView: textGenInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  // const { ref: dnaRef, inView: dnaInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [toolsTextSize, setToolsTextSize] = useState("text-2xl")

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setToolsTextSize("text-xl")
          // setMarginRight("mr-12");
          // setMarginLeft("ml-10");
        } else if (window.innerWidth < 768) {
          // setTextSize("text-xl");
        } else {
          // setTextSize("text-2xl");
          // setMarginRight("mr-80");
        }
      };
  
      // Set initial size and add event listener
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div className='bg-[#0B3542]'>
      <Navbar/>
      <MeteorsDemo/>
      <div className="pb-10"></div>
        <LampDemo/>
      <div className="relative w-full px-6 md:px-8">
      {/* --- BACKGROUND IMAGE ON MOBILE, GRID ON DESKTOP --- */}
      <div className="md:grid md:grid-cols-2 md:gap-6 items-center">
        
        {/* DNA IMAGE */}
        <div 
          ref={pixelatedRef}
          className="
            absolute md:relative inset-0 md:inset-auto
            opacity-30 md:opacity-100   /* faded on mobile */
            pointer-events-none md:pointer-events-auto
          "
        >
          {pixelatedView && (
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full flex justify-center"
            >
              <PixelatedCanvasDemo />
            </motion.div>
          )}
        </div>

        {/* TEXT ON TOP (FULL WIDTH ON MOBILE) */}
        <div 
          ref={textGenRef}
          className="
            relative z-10 
            w-full md:w-auto
            flex justify-center md:block
            py-16 md:py-0
          "
        >
          {textGenInView && (
            <div className="max-w-xl text-center md:text-left">
              <TextGenerateEffect 
                duration={0.5} 
                words={generatedWords} 
              />
            </div>
          )}
        </div>
      </div>
    </div>

        <FlipWordsDemo/>
        <div className="mb-30"><Experience /></div>
        <div className="mb-10"><DNAMarquee /></div>
        <AnimatedPinDemo/>
      
    </div>
  );
}
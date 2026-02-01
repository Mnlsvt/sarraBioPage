"use client";

import React from "react";
import { useEffect, useState } from "react";

// import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

// import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

// import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

// import { AnimatedTooltip } from "../components/ui/animated-tooltip";

import { Timeline } from "@/components/ui/timeline";

import { Navbar} from "@/components/ui/navbar";

import { useInView } from 'react-intersection-observer'; // Lazy Load

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas"; // Pixelated Image

// import { Carousel, Card } from "../components/ui/apple-cards-carousel";

import { Meteors } from "@/components/ui/meteors"; // Meteors Effect

import { FlipWords } from "@/components/ui/flip-words"; // Flip Words Effect

import { PinContainer } from "@/components/ui/3d-pin"; // Pin Container

import Experience from "@/components/ui/experience";



const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

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


// Tablet CV
// function HeroScrollDemo() {
//   return (
//     <div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl font-semibold text-white dark:text-white mb-10">
//               Click below to <br />
//               <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
//                 Check my CV
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <a href="/cv" className="mx-auto rounded-2xl object-cover h-full object-left-top"><Image
//           src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`}
//           alt="cv image"
//           height={720}
//           width={1400}
//           draggable={false}
//           unoptimized
//         /></a>
//       </ContainerScroll>
//     </div>
//   );
// }

// Projects Carousel
// function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-white font-sans">
//         My Projects.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="/images/cv-image.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
 
// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
 
//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "/images/cv-image.png",
//     content: <DummyContent />,
//   },
// ];


// Pixelated Image
export function PixelatedCanvasDemo() {
  return (
    <div className="mx-auto mt-8">
      <PixelatedCanvas
      src="/dna2.png"
      width={500}
      height={600}
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
      className="rounded-xl"
      
      />
    </div>
  );
}


// Flip Words Effect
export function FlipWordsDemo() {
  const words = ["hematology", "working with medical data", "helping people", "medical research & AI"];
 
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I love 
        <FlipWords words={words} />
      </div>
    </div>
  );
}


// My Timeline 
function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            September 2025 - Present
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            <a href="https://www.uu.se/en/study/programme/masters-programme-precision-medicine" target="_blank" className="hover:text-blue-500">Masters in Precision Medicine</a>
          </p>
            <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
            Started a Master's program in Precision Medicine at the Uppsala University.
            </p>
            <div className="flex justify-center">
            {/* Evline image */}
            <a target="_blank" href="https://www.uu.se/en/study/programme/masters-programme-precision-medicine"><Image
              src="/blood.gif"
              alt="masters program image"
              width={2000}
              height={2000}
              className="rounded-lg object-cover w-full h-full mde:h-44 lg:h-30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mb-12"
              style={{ objectFit: 'contain' }}
              unoptimized
            /></a>
            </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            November 2022 - April 2023
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            <a href="https://theageneio.gov.gr/en/thoracic-surgery/" target="_blank" className="hover:text-blue-500">Biomedical Scientist - 6 Month Internship</a>
          </p>
            <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
            Worked as a biomedical scientist at “Theageneio” Cancer Hospital of Thessaloniki
            </p>
            <div className="flex justify-center">
            {/* Evline image */}
            <a target="_blank" href="https://theageneio.gov.gr/en/thoracic-surgery/"><Image
              src={`https://cdn.dribbble.com/userupload/20387933/file/original-eb7ba7ee1856594069a5bbc3373a47a3.gif`}
              alt="masters program image"
              width={2000}
              height={2000}
              className="rounded-lg object-cover w-full h-full mde:h-44 lg:h-30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mb-12"
              style={{ objectFit: 'contain' }}
              unoptimized
            /></a>
            </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-xl font-bold mb-8">
            November 2022 - April 2023
          </p>
          <p className="text-white dark:text-white text-lg md:text-sm font-bold mb-4">
            <a href="https://theageneio.gov.gr/en/thoracic-surgery/" target="_blank" className="hover:text-blue-500">Biomedical Scientist - 6 Month Internship</a>
          </p>
            <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-6">
            Worked as a biomedical scientist at “Theageneio” Cancer Hospital of Thessaloniki
            </p>
            <div className="flex justify-center">
            {/* Evline image */}
            <a target="_blank" href="https://theageneio.gov.gr/en/thoracic-surgery/"><Image
              src={`https://cdn.dribbble.com/userupload/20387933/file/original-eb7ba7ee1856594069a5bbc3373a47a3.gif`}
              alt="masters program image"
              width={2000}
              height={2000}
              className="rounded-lg object-cover w-full h-full mde:h-44 lg:h-30 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] mb-12"
              style={{ objectFit: 'contain' }}
              unoptimized
            /></a>
            </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  ); 
}


// Pin Container
export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="My Resume ↪"
        href="/cv"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
            My Resume
          </h3>
            <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Click here to check out my resume.
            </span>
            <Image
              src="/sarraki.jpeg"
              alt="Pin container image"
              width={240} // Adjusted width for smaller size
              height={240} // Adjusted height for smaller size
                className="w-80 h-80 object-cover rounded-full mx-auto mt-3" // Changed to rounded-full for bubble shape and added mx-auto for centering
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

// technologies - tools
const people = [
  {
    id: 1,
    name: "Python",
    designation: "",
    image: "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/python.png",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/js.png",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/typescript.png",
  },
  {
    id: 4,
    name: "Linux",
    designation: "",
    image:
      `https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/linux.png`,
  },
  {
    id: 5,
    name: "Git & Github",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/git.png",
  },
  {
    id: 6,
    name: "React",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/react.png",
  },
  {
    id: 7,
    name: "NodeJS",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/nodejs.png",
  },
  {
    id: 8,
    name: "Google Cloud",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/gcloud.jpg",
  },
  {
    id: 9,
    name: "Firebase",
    designation: "",
    image:
      "https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/firebase.png",
  },
];
 
function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-10 mt-12 w-full">
      {/* <AnimatedTooltip items={people} /> */}
    </div>
  );
}

export default function HomePage() {

  // Lazy Load
  const { ref: tooltipRef, inView: tooltipInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: pixelatedRef, inView: pixelatedView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textGenRef, inView: textGenInView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
      <div className="grid grid-cols-2 gap-4 pl-8 w-full">
        {/* <PixelatedCanvasDemo/> */}
        <div ref={pixelatedRef}>
            {pixelatedView && (
            // Hover Up and Down
              <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
              <PixelatedCanvasDemo />
              </motion.div>
            )}
        </div>
        {/* <div className="mt-30"><TextGenerateEffect duration={0.9} words={generatedWords}/></div> */}
        <div className="mt-30" ref={textGenRef}>
          {textGenInView && <TextGenerateEffect duration={0.5} words={generatedWords} />}
        </div>
      </div>
        <FlipWordsDemo/>
        {/* <TimelineDemo/> */}
        <div className="mb-10"><Experience /></div>
        <div className="mb-10"><DNAMarquee /></div>
        <AnimatedPinDemo/>
      

      {/* <AnimatedTooltipPreview/> */}
      {/* <AppleCardsCarouselDemo/> */}
      {/* <HeroScrollDemo/> */}
      {/* <MacbookScrollDemo /> */}
    </div>
  );
}
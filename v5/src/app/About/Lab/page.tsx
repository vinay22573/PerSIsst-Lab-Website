"use client";
// main h- is at hero hightlight .tsc
import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroHighlight,Highlight } from '@/components/ui/hero-highlight';

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";


const Lab = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <BG/> */}
      
      <BG2/>

      
    </main>
  )
}

const BG = () => {
  return (
    <div className="h-[50rem] w-full bg-black :bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <Type/> */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Type/>
      {/* <div className="text-6xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      About PerSIsst Lab </div> */}
    </div>
  );
}
const Type = () =>  {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "About",
    },
    {
      text: "PerSIsst",
      className: "text-purple-500",
    },
    {
      text: "Lab",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <TypewriterEffectSmooth words={words} /><p
    className="  font-normal text-center md:text-lg  max-w-screen-lg mx-auto"
    >
The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab, founded by Dr. Pragma Kar, is a creative research hub dedicated to designing Human-Centric solutions that assist in smart living. The lab provides an innovation space to the team of researchers and engineers who are passionate about weaving novel techniques of integrating systems with sensing capabilities to solve critical challenges in people’s lives.</p>
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       for buttons
      </div> */}
                  
 
     
    </div>
  );
}


const Type2 = () =>  {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "Our",
    },
    {
      text: "Purpose",
      className: "text-purple-500",
    },

  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem]  "> 
    {/* 15 to 5 rem height */}
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       for buttons
      </div> */}
     
    </div>
  );
}


const BG2 = () => {
  return (
    <>        <div className="bg-[#010114] h-screen overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full">
        {/* Ellipse layer */}
        <img 
            src="/bg/Ellipse_8.png" 
            alt="ellipse" 
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" 
        />
        
        {/* Vector layer */}
        <img 
            src="/bg/Vector.png" 
            alt="vector" 
            className="absolute top-[25%] md:top-[20%] lg:top-[30%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20" 
        />
    </div>
    <div className="relative z-30 pt-[10vw]"> {/* Reserve space for navbar */}
<Type/>
              



     <p
    className=" pt-3 font-normal text-center md:text-lg  max-w-screen-lg mx-auto"
    >
    
The Lab aims at facilitating cutting-edge research in the field of Ubiquitous Computing, Pervasive Sensing, Artificial Intelligence and allied domains to solve real-world problems in the interdisciplinary domains of Cognitive Psychology, Health & Wellness, Smart Space, Inclusive and Accessible Assistive System design, and related areas. 

    
     </p>
     

              
              {/* <div className = "text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
                        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>


              </div> */}
      
      </div>
        </div>

    <Type2/>
    {/* <Card_div/>  */}
    {/* Card_div Replaced by Card_div2 */}
    <Card_div2/>

    </>
    
  );
}


interface IconCardProps {
  iconSrc: string; // Source for the icon image
  title: string;   // Title of the card
  description: string; // Description text for the card
}

const IconCard: React.FC<IconCardProps> = ({ iconSrc, title, description }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const { left, top } = card.getBoundingClientRect();
    const x = e.clientX - left; // Mouse X relative to card
    const y = e.clientY - top;  // Mouse Y relative to card
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="iconcard">
      <div className="icontainer">
        <div
          className="icard"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        >
          <div className="icontent">
            <img className="iicon" src={iconSrc} alt={`${title} Icon`} />
            <h3 className="ititle">{title}</h3>
            <p className="idescription">{description}</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

const Card_div2 = () => {
  return (
    
<div className="py-5 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-10 pb-40 mx-auto px-20">

<IconCard 
        iconSrc="/images/purpoes/Vector.svg" 
        title="Mission" 
        description="Transforming lives through smart innovations – people face challenges from basic issues like cognition and health to advanced needs like interactivity and smart assistance." 
      />
<IconCard 
              iconSrc="/images/purpoes/Vector-1.svg" 
              title="Vision" 
              description="Weaving a smarter tomorrow for all - curating a world where intelligent and smart technology can seamlessly integrate with and enhance the quality of daily living through PerSIsst Lab." 
            />

<IconCard 
        iconSrc="/images/purpoes/Vector-2.svg" 
        title="Value" 
        description="Assist to innovate, innovate to assist - valuing innovations that involve creative and free-thinking, individual as well as team effort, and a spirit to bring a positive transformation to lives" 
      />
      



    </div>
  )
}

const Card_div = () => {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-0 mx-auto px-20">
        <Card ptr="Mission" title="Transforming lives through smart innovations – people face challenges from basic issues like cognition and health to advanced needs like interactivity and smart assistance." icon={<V1 />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black-900"
            colors={[[255, 0, 255]]}
          />
        </Card>
        <Card ptr="Vision"title="Weaving a smarter tomorrow for all - curating a world where intelligent and smart technology can seamlessly integrate with and enhance the quality of daily living through PerSIsst Lab." icon={<V2/>}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black-900"
            colors={[[125, 211, 252]]}

          />
          {/* Radial gradient for the cute fade
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" /> */}
        </Card>
        <Card ptr="Values" title="Assist to innovate, innovate to assist - valuing innovations that involve creative and free-thinking, individual as well as team effort, and a spirit to bring a positive transformation to lives" icon={<V3 />}>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black-900"
            colors={[[0, 255, 0]]}
          />
          
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  ptr,
}: {
  title: string;
  ptr: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Lcon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Lcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Lcon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Lcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-100 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-3xl text-center opacity-100 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {ptr}
        </h2>
        
        <h2 className="text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

      </div>
    </div>
  );
};

const V1= () => {
  return (
    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 0.5C41.5013 0.5 42.9813 0.581334 44.44 0.744C44.9621 0.801782 45.4678 0.96184 45.9281 1.21504C46.3883 1.46823 46.7942 1.80961 47.1226 2.21967C47.4509 2.62973 47.6953 3.10046 47.8417 3.60496C47.9882 4.10946 48.0338 4.63786 47.976 5.16C47.9182 5.68214 47.7582 6.18778 47.505 6.64806C47.2518 7.10834 46.9104 7.51424 46.5003 7.84258C46.0903 8.17093 45.6195 8.4153 45.115 8.56173C44.6105 8.70816 44.0821 8.75378 43.56 8.696C36.9682 7.95858 30.3101 9.28776 24.5067 12.4997C18.7033 15.7116 14.0414 20.6476 11.1659 26.6248C8.29031 32.602 7.34321 39.3251 8.45557 45.8641C9.56792 52.4031 12.6848 58.4348 17.375 63.125C22.0652 67.8152 28.0969 70.9321 34.6359 72.0444C41.1749 73.1568 47.898 72.2097 53.8752 69.3341C59.8524 66.4586 64.7884 61.7967 68.0003 55.9933C71.2122 50.1899 72.5414 43.5318 71.804 36.94C71.7462 36.4179 71.7918 35.8895 71.9383 35.385C72.0847 34.8805 72.3291 34.4097 72.6574 33.9997C73.3205 33.1715 74.2855 32.6407 75.34 32.524C76.3945 32.4073 77.4522 32.7143 78.2803 33.3774C78.6904 33.7058 79.0318 34.1117 79.285 34.5719C79.5382 35.0322 79.6982 35.5379 79.756 36.06C79.916 37.5187 79.9973 38.9987 80 40.5C80 62.592 62.092 80.5 40 80.5C17.908 80.5 0 62.592 0 40.5C0 18.408 17.908 0.5 40 0.5ZM39.872 24.008C40.1356 25.0349 39.9808 26.1244 39.4415 27.0372C38.9022 27.95 38.0226 28.6114 36.996 28.876C34.1755 29.6149 31.7201 31.3547 30.0882 33.7708C28.4562 36.187 27.759 39.1144 28.1268 42.0068C28.4946 44.8992 29.9022 47.559 32.0869 49.4898C34.2717 51.4206 37.0843 52.4906 40 52.5C42.6612 52.5011 45.2473 51.6176 47.3515 49.9884C49.4557 48.3592 50.9587 46.0767 51.624 43.5C51.9075 42.4934 52.574 41.6379 53.4806 41.1167C54.3872 40.5955 55.4619 40.4501 56.4744 40.7116C57.4869 40.9731 58.3568 41.6207 58.8977 42.5157C59.4385 43.4108 59.6073 44.482 59.368 45.5C58.1409 50.2037 55.2434 54.2998 51.2166 57.0231C47.1899 59.7464 42.3094 60.9105 37.487 60.298C32.6646 59.6855 28.2301 57.3383 25.012 53.6949C21.7939 50.0515 20.0123 45.3611 20 40.5C19.9993 36.0656 21.4724 31.7566 24.1877 28.2507C26.9029 24.7447 30.7064 22.2406 35 21.132C35.5087 21.0009 36.0383 20.9713 36.5585 21.0448C37.0787 21.1184 37.5793 21.2937 38.0317 21.5608C38.4842 21.8279 38.8795 22.1815 39.1953 22.6013C39.5111 23.0212 39.741 23.4992 39.872 24.008ZM66.016 1.008C66.7461 1.31072 67.3702 1.82295 67.8094 2.48004C68.2487 3.13713 68.4834 3.90962 68.484 4.7V12.02H75.8C76.591 12.0202 77.3642 12.2549 78.0218 12.6944C78.6795 13.1339 79.192 13.7586 79.4947 14.4894C79.7974 15.2202 79.8766 16.0243 79.7223 16.8001C79.5681 17.5759 79.1872 18.2886 78.628 18.848L64.48 32.98C63.73 33.7302 62.7128 34.1518 61.652 34.152H52L44.688 41.468C43.9374 42.2186 42.9195 42.6402 41.858 42.6402C40.7965 42.6402 39.7786 42.2186 39.028 41.468C38.2774 40.7174 37.8558 39.6995 37.8558 38.638C37.8558 37.5765 38.2774 36.5586 39.028 35.808L46.344 28.5V18.844C46.3442 17.7832 46.7658 16.766 47.516 16.016L61.656 1.872C62.2154 1.31227 62.9282 0.931033 63.7043 0.776526C64.4804 0.622018 65.2849 0.701181 66.016 1.004M60.484 14.352L54.344 20.5V26.156H60L66.144 20.016H64.484C63.4231 20.016 62.4057 19.5946 61.6556 18.8444C60.9054 18.0943 60.484 17.0769 60.484 16.016V14.352Z" fill="white"/>
    </svg>
    
  );
};
const V2= () => {
  return (
<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12164 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3073 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.654 55.6448 80 47.9112 80 40C79.9878 29.3951 75.7696 19.228 68.2708 11.7292C60.772 4.23041 50.6049 0.0122153 40 0ZM73.8462 40C73.8489 43.1214 73.4178 46.228 72.5654 49.2308H57.7539C58.6977 43.1131 58.6977 36.8869 57.7539 30.7692H72.5654C73.4178 33.772 73.8489 36.8786 73.8462 40ZM30 55.3846H50C48.0298 61.8408 44.6093 67.7609 40 72.6923C35.3929 67.7593 31.9727 61.8397 30 55.3846ZM28.5 49.2308C27.4433 43.1223 27.4433 36.8777 28.5 30.7692H51.5308C52.5875 36.8777 52.5875 43.1223 51.5308 49.2308H28.5ZM6.15386 40C6.15114 36.8786 6.58218 33.772 7.43463 30.7692H22.2462C21.3023 36.8869 21.3023 43.1131 22.2462 49.2308H7.43463C6.58218 46.228 6.15114 43.1214 6.15386 40ZM50 24.6154H30C31.9702 18.1592 35.3907 12.2391 40 7.30769C44.6071 12.2407 48.0273 18.1603 50 24.6154ZM70.1269 24.6154H56.4269C54.7 18.2805 51.7899 12.3296 47.85 7.07692C52.6104 8.22049 57.0673 10.3799 60.9151 13.4071C64.7628 16.4344 67.9105 20.2578 70.1423 24.6154H70.1269ZM32.15 7.07692C28.2102 12.3296 25.3 18.2805 23.5731 24.6154H9.85771C12.0895 20.2578 15.2372 16.4344 19.085 13.4071C22.9327 10.3799 27.3896 8.22049 32.15 7.07692ZM9.85771 55.3846H23.5731C25.3 61.7195 28.2102 67.6704 32.15 72.9231C27.3896 71.7795 22.9327 69.6201 19.085 66.5929C15.2372 63.5656 12.0895 59.7422 9.85771 55.3846ZM47.85 72.9231C51.7899 67.6704 54.7 61.7195 56.4269 55.3846H70.1423C67.9105 59.7422 64.7628 63.5656 60.9151 66.5929C57.0673 69.6201 52.6104 71.7795 47.85 72.9231Z" fill="white"/>
</svg>

    
  );
};
const V3= () => {
  return (
<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 44.2107H8.94444M44.5 4.21069V8.65514M80.0556 44.2107H84.5M16.0556 15.7662L19.1667 18.8774M72.9444 15.7662L69.8333 18.8774M34.2778 66.4329H54.7222M31.1667 61.9885C27.4354 59.19 24.6793 55.2885 23.2886 50.8366C21.8979 46.3847 21.9432 41.6081 23.4181 37.1834C24.8931 32.7587 27.7228 28.9102 31.5064 26.1831C35.2901 23.456 39.8359 21.9885 44.5 21.9885C49.1641 21.9885 53.7099 23.456 57.4936 26.1831C61.2772 28.9102 64.1069 32.7587 65.5818 37.1834C67.0568 41.6081 67.1021 46.3847 65.7114 50.8366C64.3207 55.2885 61.5646 59.19 57.8333 61.9885C56.0981 63.7062 54.7915 65.8082 54.0194 68.1246C53.2473 70.4409 53.0313 72.9065 53.3889 75.3218C53.3889 77.6793 52.4524 79.9402 50.7854 81.6072C49.1184 83.2742 46.8575 84.2107 44.5 84.2107C42.1425 84.2107 39.8816 83.2742 38.2146 81.6072C36.5476 79.9402 35.6111 77.6793 35.6111 75.3218C35.9687 72.9065 35.7527 70.4409 34.9806 68.1246C34.2085 65.8082 32.9019 63.7062 31.1667 61.9885Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
  );
};

const Lcon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Lab
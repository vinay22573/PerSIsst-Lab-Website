"use client";
// main h- is at hero hightlight .tsc
import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroHighlight,Highlight } from '@/components/ui/h2';
import { LinkPreview } from '@/components/ui/link-prev';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { cn } from "@/lib/utils"


import { WobbleCard } from "@/components/ui/wobble-card";

const Community = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <BG/> */}
      
      <BG2/>

      
    </main>
  )
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
      text: "Our",
      className: "text-purple-500",
    },
    {
      text: "Community",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       for buttons
      </div> */}
    <p
    className=" font-normal text-center md:text-lg  max-w-lg mx-auto"
    >
At PerSIsst, our team of passionate researchers and engineers focuses on tackling key challenges in human cognition, mental health, mindful technology, and inclusive 
human-computer interaction (HCI) designs.
     </p>
     
    </div>
  );
}



const BG2 = () => {
  return (
    <> {/* Added padding top and bottom */}
      <HeroHighlight containerClassName="h-[55rem]"> {/* Adjusted height 125 */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <Type />
          
        </motion.div>
        {/* <WobbleCardDemo /> */}
        <Team/>
      </HeroHighlight>
      
    </>
  );
}




export default Community



const ThreeDCardDemo = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/pragmabox.png"
            height="1000"
            width="1000"
            className="h-60 py-0 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}





const WobbleCardDemo= () =>  {
  return (
 <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className=""
      >      {/* added padding py-20 .its forced */}
        <div className="max-w-xs pt-20">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Dr. Pragma Kar
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Dr. Pragma Kar is founder and director of the Pervasive Sensing & Intelligent Assistive Systems research group and is an Assistant Professor at the 
          Department of Human-Centered Design at the 
          IIIT-Delhi.
          </p>
        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}


<div className="flex py-5 pl-2 justify-left space-x-2">
  <Link 
    href="https://www.linkedin.com/in/pragma-kar-9419143a/"
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/icons/ln.png"
      height="50"
      width="30"
      className="object-cover hover:shadow-xl"
      alt="LinkedIn"
    />
  </Link>

  <Link 
    href="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en"
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/icons/gs.png"
      height="50"
      width="30"
      className="object-cover hover:shadow-xl"
      alt="Google Scholar"
    />
  </Link>

  <Link 
    href="https://iiitd.irins.org/profile/554054"
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/icons/id.png"
      height="50"
      width="30"
      className="object-cover hover:shadow-xl"
      alt="IRINS Profile"
    />
  </Link>

  <Link 
    href="https://www.iiitd.ac.in/pragma"
    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/icons/web.png"
      height="50"
      width="30"
      className="object-cover hover:shadow-xl"
      alt="Personal Website"
    />
  </Link>
</div>
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <Image
            src="/images/kar1.png"
            height="500"
            width="500"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        
      </WobbleCard>
     
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard> */}
      
    </div>
  );
}


const Team = () => {
  return (
    <>
      <div className="flex justify-center space-x-5">
        <CardDemo
          title="Siddhant Bali"
          description="Webmaster 2024 | B.Tech. 2026 CSD"
          backgroundImgSrc="/team/bali1.jpeg"
          link="https://www.linkedin.com/in/kintsugi-programmer/"
        />
        <CardDemo
          title="Ashu"
          description="IP 2024 | B.Tech. 2026 CSAM"
          backgroundImgSrc="/team/Ashu.jpeg"
          link="#"
        />
        {/* <CardDemo
          title="Blog 3"
          description="Coming Soon..."
          backgroundImgSrc="/bg/3.png"
          link="https://medium.com/"
        />
        <CardDemo
          title="Blog 4"
          description="Coming Soon..."
          backgroundImgSrc="/bg/4.png"
          link="https://medium.com/"
        />
      </div>
      <div className="flex justify-center space-x-5 my-5">
         <CardDemo
          title="Blog 5"
          description="Coming Soon..."
          backgroundImgSrc="/bg/4.png"
          link="https://medium.com/"
        />
        <CardDemo
          title="Blog 6"
          description="Coming Soon..."
          backgroundImgSrc="/bg/2.jpg"
          link="https://medium.com/"
        />
        <CardDemo
          title="Blog 7"
          description="Coming Soon..."
          backgroundImgSrc="/bg/1.webp"
          link="https://medium.com/"
        /> */}
      </div>
    </>
  );
};


    interface CardDemoProps {
      title: string;
      description: string;
      backgroundImgSrc: string;
      link: string;
    }
    
    const CardDemo: React.FC<CardDemoProps> = ({
      title,
      description,
      backgroundImgSrc,
      link,
    }) => {
      return (
        <div className="max-w-xs w-full">
          <Link href={link} target="_blank" style={{ pointerEvents: 'auto' }}>
            <div
              className="overflow-hidden relative card h-96 rounded-2xl max-w-sm mx-auto flex flex-col justify-end p-4 border border-purple-500/[0.7]"
              style={{
                backgroundImage: `url(${backgroundImgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
          <div className="bg-black/60 p-4  rounded-2xl">
          <h1 className="font-bold text-white text-xl md:text-2xl text-white">
                  {title}
                </h1>
                <p className="font-normal text-sm text-white my-2">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    };
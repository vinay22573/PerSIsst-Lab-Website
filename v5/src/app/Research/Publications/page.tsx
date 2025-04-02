"use client";
// main h- is at hero hightlight .tsc


import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";









import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroHighlight,Highlight } from '@/components/ui/h2';

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils"

const Publications = () => {
  return (
    <div
    className="h-auto bg-black/[0.96]  bg-grid-white/[0.02] md:h-[100rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Explore Publications</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Transforming human lives through smart innovations. Our mission is to address these wide spectrum of challenges through the design and development of inclusive and accessible novel solutions.</p>
            
                {/* <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link> */}
                <PublicationCard/>
            
        </div>
        
        </div>
    // <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    //   {/* <BG/> */}
      
    //   {/* <BG2/> */}
    //   <h1
    //         className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    //         >Master the art of music</h1>
    //   <PublicationCard/>

      
    // </main>
  )
}



export default Publications

const PublicationCard = () => {
    return (
        <>

    <div className="flex justify-center space-x-5 mt-20 ">
    <CardDemo
  title="Publication 1"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/2.jpg"
  link="https://medium.com/"
/>
<CardDemo
  title="Publication 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/1.webp"
  link="https://medium.com/"
/>
<CardDemo
  title="Publication 3"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/3.png"
  link="https://medium.com/"
/>
<CardDemo
  title="Publication 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/4.png"
  link="https://medium.com/"
/>
</div>
<div className="flex justify-center space-x-5 my-5">
<CardDemo
  title="Publication 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/4.png"
  link="https://medium.com/"
/>
<CardDemo
  title="Publication 1"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/2.jpg"
  link="https://medium.com/"
/>
<CardDemo
  title="Publication 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/1.webp"
  link="https://medium.com/"
/>
</div>

        </>

    );}




interface CardDemoProps {
    title: string;
    description: string;
    author: string;
    readTime: string;
    avatarSrc: string;
    backgroundImgSrc: string;
    link:  string;
  }
  
  const CardDemo: React.FC<CardDemoProps> = ({
    title,
    description,
    author,
    readTime,
    avatarSrc,
    backgroundImgSrc,
    link,
  }) => {
    return (
      <div className="max-w-xs w-full group/card">
        <Link href={link} target="_blank" style={{ pointerEvents: 'auto' }}>
        
        <div
          className={cn(
            'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4'
          )}
          style={{
            backgroundImage: `url(${backgroundImgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute w-full h-full bg-black opacity-30 top-0 left-0 transition duration-300 group-hover/card:bg-black hover/card:opacity-70"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <Image
              height={100}
              width={100}
              alt="Avatar"
              src={avatarSrc}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col left-0">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {author}
              </p>
              <p className="text-sm text-gray-400">{readTime}</p>
            </div>
          </div>
          <div className="text content left-0">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              {description}
            </p>
          </div>
        </div>
        </Link>
      </div>
    );
  };
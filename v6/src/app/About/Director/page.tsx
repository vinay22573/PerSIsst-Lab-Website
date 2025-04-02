"use client";
import React from 'react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Link from 'next/link';
import { main } from 'framer-motion/client';
import Image from 'next/image';
function Director() {
  return (
    <main className=''>
      <div className="bg-[#010114]  overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Ellipse 1 Left */}
          <img
            src="/bg/Ellipse_Left.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 z-10"
          />
          {/* Ellipse 2 Right */}
          <img
            src="/bg/Ellipse_Right.png"
            alt="ellipse"
            className="absolute bottom-0 right-0 z-10"
          />
          {/* Ellipse 3 down */}
          <img
            src="/bg/Ellipse_down.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 w-full h-auto z-10"
          />
          {/* Vector layer */}
          <img
            src="/bg/Vector.png"
            alt="vector"
            className="absolute top-[5%] md:top-[6%] lg:top-[7%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
        <div className='py-8 lg:py-16'>
        </div>
        <div className="relative z-30 "> {/* Reserve space for navbar */}
          <Type3 />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full  py-2 px-4 mb-4">
            
            <div className="relative col-span-1 lg:col-span-2 h-full min-h-[450px] flex flex-col gap-2 text-white text-wrap text-center">
              <div className='hidden lg:block p-10'></div>
              <h1 className="m-0 text-center pb-4  text-white text-4xl lg:text-5xl">Dr. Pragma Kar</h1>
              <h3 className="text-3xl text-[#9961D9] lg:pb-2">Assistant Professor, IIT Delhi</h3>
              <p className='lg:pl-3 lg:pr-5 lg:pt-2 text-1.5xl text-lg lg:text-xl lg:tracking-wide'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (<span className="text-[#9961D9]">PERSISST</span>) Lab</p>
              <p className='lg:pl-3 lg:pr-5 lg:pt-2  text-1.5xl text-lg lg:text-xl lg:tracking-wide'>Member, Center for Design and New Media (<span className="text-[#9961D9]">CDNM</span>)</p>
              <p className='lg:pl-3 lg:pr-5  lg:pt-2 text-1.5xl text-lg lg:text-xl lg:tracking-wide'>Indraprastha Institute of Information Technology (<span className="text-[#9961D9]">IIIT</span>) Delhi</p>
              <div className="flex gap-4 justify-center items-center p-4">
                <Link href="https://www.linkedin.com/in/pragma-kar-9419143a/">
                  <img className="w-8 h-8 lg:w-10 lg:h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
                </Link>
                <Link href="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en">
                  <img className="w-8 h-8 lg:w-10 lg:h-10 block mb-1" src="/googlescholar.png" alt="google scholar" />
                </Link>
                <Link href="https://iiitd.irins.org/profile/554054">
                  <img className="w-8 h-8 lg:w-10 lg:h-10 block mb-1" src="/irins.png" alt="irins Icon" />
                </Link>
                <Link href="https://www.iiitd.ac.in/pragma">
                  <img className="w-8 h-8 lg:w-10 lg:h-10 block mb-1" src="/website.png" alt="Website Icon" />
                </Link>
              </div>
            </div>
            <div className="col-span-1 place-content-center px-2 ">
            <img src="/Mamwithbg.png" alt="mam" className='w-auto h-[450px] ' />
          </div>
          </div>


          
        </div>
      </div>
    </main>
  );
}
const Type3 = () => {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "About",
    },
    {
      text: "Lab",
      className: "text-purple-500",
    },
    {
      text: "Director",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-4rem  h-[8rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}


export default Director;

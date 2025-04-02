
"use client";
import React from 'react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { main } from 'framer-motion/client';
import Image from "next/image";

function Director() {
  return (
    <main className=" min-h-screen bg-black/[0.96] pb-20 antialiased bg-grid-white/[0.02]">
      <div className="bg-[#010114] h-screen  relative ">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Ellipse 1 Left */}
          <img
            src="/about/Ellipse_Left.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 z-10"
          />
          {/* Ellipse 2 Right */}
          <img
            src="/about/Ellipse_Right.png"
            alt="ellipse"
            className="absolute bottom-0 right-0 z-10"
          />
          {/* Ellipse 3 down */}
          <img
            src="/about/Ellipse_down.png"
            alt="ellipse"
            className="absolute bottom-0 left-0 w-full h-auto z-10"
          />
          {/* Vector layer */}
          <img
            src="/about/Vector.png"
            alt="vector"
            className="absolute top-[25%] md:top-[20%] lg:top-[30%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
        <div className="relative z-30 pt-[15vh] "> {/* Reserve space for navbar */}
          <Type3 />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 py-0">
            <div className="relative col-span-1 lg:col-span-2 ">
              {/* min-h-[450px] */}
              <div className="absolute  w-full ">
                <h1 className="m-0 text-center p-4  text-white text-5xl">Dr Pragma Kar</h1>
              </div>
              <div className="absolute  w-full h-[80%]  flex flex-col justify-center items-center text-center text-white text-xl">
                <h3 className="text-4xl text-[#9961D9] p-4">Assistant Professor, PhD, Jadavpur University</h3>
                <p className='pl-3 pr-5 pt-1 pb-1 text-1.5xl'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (<span className="text-[#9961D9]">PERSISST</span>) Lab</p>
                <p className='pl-3 pr-5 pt-1 pb-1 text-1.5xl'>Associate Faculty, Center for Design and New Media (<span className="text-[#9961D9]">CDNM</span>)</p>
                <p className='pl-3 pr-5 pb-1 pt-1 text-1.5xl'>Indraprastha Institute of Information Technology (<span className="text-[#9961D9]">IIIT</span>) Delhi</p>
              </div>
              <div className='absolute top-[70%] w-full h-20% flex justify-center items-center'>
              <div className="w-[50%] h-[20%] grid grid-cols-4 gap-1 justify-items-center items-center ">
                <div className="link">
                  <a href="https://www.linkedin.com/in/pragma-kar-9419143a/" target="_blank">
                    <img className="w-10 h-10 block mb-1" src="/about/linkedin.png" alt="LinkedIn Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en" target="_blank">
                    <img className="w-10 h-10 block mb-1" src="/about/googlescholar.png" alt="googlescholar LinkedIn Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://iiitd.irins.org/profile/554054" target="_blank">
                    <img className="w-10 h-10 block mb-1" src="/about/irins.png" alt="irins Icon" />
                  </a>
                </div>
                <div className="link">
                  <a href="https://www.iiitd.ac.in/pragma" target="_blank">
                    <img className="w-10 h-10 block mb-1" src="/about/website.png" alt="website Icon" />
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="col-span-1 ">
              {/* <img src="/about/Mamwithbg.png" alt="mam" className='' /> */}
              <Image
            src="/about/Mamwithbg.png"
            height="300"
            width="300"
            className="h-full w-250 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
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
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}


export default Director;
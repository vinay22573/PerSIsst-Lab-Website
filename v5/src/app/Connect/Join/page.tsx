"use client";
// main h- is at hero hightlight .tsc


import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import { LinkPreview } from "@/components/ui/link-prev";







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

const Join = () => {
  return (
    <div
    className="h-auto bg-black/[0.96]  bg-grid-white/[0.02] md:h-[55rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-left" >
            <h1
            className="mt-20 text-center md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Join Us</h1>
            <p
            className="mt-10 font-normal text-base md:text-lg text-neutral-300 mx-60"
            >The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab at the Department of Human-Centered Design (HCD), Indraprastha Institute of Information Technology Delhi (IIIT-Delhi), is actively seeking motivated researchers to join the Lab as Undergraduate/PostGraduate researchers, Research Assistants/Associates/Interns, PhD scholars, etc.<br></br> <br></br>The candidate will be working on cutting-edge technologies in the field of Human-Computer Interaction. To learn about current openings, follow us on our social media sites or follow the <Link href={"https://www.iiitd.ac.in/"} target="_blank" style={{ color: 'purple' }}>IIIT Delhi Official Website</Link> for more updates. <br></br>

            Self-funded candidates may apply on a rolling basis (any time of the year).<br></br><br></br> If you are interested in joining the research team on an immediate basis, please prepare a Statement of Purpose (PDF) and send it to <Link href="mailto:pragma@iiitd.ac.in?subject=Enquiry: Here&body=Body Here" style={{ color: 'purple' }}>
  persisst[at]iiitd[dot]ac[dot]in
</Link>.
            
            
            <br></br><br></br><br></br>
            If you are interested in collaborating or sharing a relevant research idea, please reach out to us at <Link href="mailto:persisst@iiitd.ac.in?subject=Enquiry: Here&body=Body Here" style={{ color: 'purple' }}>
  persisst[at]iiitd[dot]ac[dot]in
</Link>.

            </p>
            
                {/* <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link> */}
                
            
        </div>
        <div className="flex justify-end pt-6 pb-6">
  <button className=" relative inline-flex  h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  <Image
              src='/images/PerSIsst_Final 1.svg'
              alt='persisst logo'
              width={25}
              height={100}
              className="mr-2"
              
              
            /> <Link href="mailto:persisst@iiitd.ac.in?subject=Enquiry: Here&body=Body Here">
            Apply Here

          </Link>
  </span>
</button></div>
        
        </div>
    // <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    //   {/* <BG/> */}
      
    //   {/* <BG2/> */}
    //   <h1
    //         className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    //         >Master the art of music</h1>
    //   <BlogCard/>

      
    // </main>
  )
}





export default Join







const WobbleCardDemo= () =>  {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >        {/* added padding py-20 .its forced */}
        <div className="max-w-md pt-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Pervasive Sensing & Intelligent Assistive Systems Lab
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          PerSIsst Labs,

Department of Human Centered Design, <br />
Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) ,<br />

New Delhi, Delhi 110020
          </p>
  


        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}

<div className="flex py-5 justify-left space-x-2">
  {/* <Link href="https://www.linkedin.com/in/pragma-kar-9419143a/" target="_blank" style={{ pointerEvents: 'auto' }}>
    <Image
      src="/images/icons/ln.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="LinkedIn"
    />
  </Link> */}
  <LinkPreview
          url="https://www.linkedin.com/in/pragma-kar-9419143a/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
        >
          <Image
      src="/images/icons/ln.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="LinkedIn"
    />
  </LinkPreview>



  <LinkPreview
          url="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
        >
    <Image
      src="/images/icons/gs.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="Google Scholar"
    />
  </LinkPreview>


  <LinkPreview
          url="https://iiitd.irins.org/profile/554054"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
        >
    <Image
      src="/images/icons/id.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="IRINS Profile"
    />
  </LinkPreview>


  <LinkPreview
          url="https://www.iiitd.ac.in/pragma"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-800 to-cyan-500"
        >
    <Image
      src="/images/icons/web.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="Personal Website"
    />
  </LinkPreview>
  </div>
  <div className="flex justify-end ">
  <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  <Image
              src='/images/PerSIsst_Final 1.svg'
              alt='persisst logo'
              width={25}
              height={100}
              className="mr-2"
              
              
            /> <Link href="mailto:pragma@iiitd.ac.in?subject=Enquiry: Here&body=Body Here">
            Drop Email

          </Link>
  </span>
</button></div>

      </WobbleCard>
      <div className="col-span-1 rounded-2xl overflow-hidden">
  <iframe
    className="rounded-2xl"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
     
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

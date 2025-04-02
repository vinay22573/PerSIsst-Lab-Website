"use client";
import React from 'react'
import Link from 'next/link'
import {FlipWords} from './ui/flip-words'
import Image from 'next/image'
import "@/styles/event-card.css";
import CardEventSlider from "@/components/CardEventSlider";

const events = [
    {
      type: "Upcoming Events",
      title: "Workshop on Cognitive Assistive Technologies",
      description: "Join us for a workshop on the latest advancements in cognitive assistive technologies.",
      date: "21st Mar-2025",
      location: "A-106 RnD, IIITD",
      background_image_url:
        "https://old.iiitd.ac.in/sites/all/themes/impact_theme/images/riise.jpg",
      learn_more_link: "https://rs.iiitd.ac.in/",
    },
    {
      type: "Ongoing Events",
      title: "AI & Machine Learning Seminar",
      description: "Join us for an in-depth seminar on the latest advancements.",
      date: "Ongoing - Join Anytime",
      location: "Online Event",
      background_image_url:
        "https://media.licdn.com/dms/image/v2/C561BAQE-51J-8KkMZg/company-background_10000/company-background_10000/0/1584559866970/eventscom_cover?e=2147483647&v=beta&t=3bktbE7ts5aNwH8XEUM5rW0G2aMbuQ1b2dHBVQgZqmA",
      learn_more_link: "/events/ongoing",
    },
    {
      type: "Past Events",
      title: "Blockchain for Beginners Workshop",
      description: "This workshop covered the basics of blockchain technology.",
      date: "5 Nov-2024",
      location: "B-221 IIITD Conference Room",
      background_image_url:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      learn_more_link: "/events/past",
    },
  ];
  

const Hero = () => {
  const words = ["Pervasive Sensing", "Intelligent", "Assistive"];

  return (
    <>
      {/* Main Hero Section */}
      <div className='relative sm:h-[55rem] md:h-[55rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto pt-0 md:py-0'>
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.75] "
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/bg/1bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* The work of this given below div is just to push the main content down */}
        <div className='block h-16 lg:hidden'></div>
        <div className='relative z-10 max-w-5xl mx-auto p-4 w-full text-center'>
          <p className="text-lg md:text-3xl mt-4 text-white font-bold inter-var text-center">
            Crafting Smart Living Through
          </p>

          <div className='flex items-center justify-center mt-0 md:mt-0 text-4xl md:text-6xl font-bold max-md:flex-wrap whitespace-nowrap'>
            <h1 className='text-white'>
              <FlipWords words={words} />
            </h1> 
            <h1 className='pl-1 text-white'>Systems</h1>
          </div>

          <p className="text-sm  md:text-lg px-1rem mt-4 text-white font-normal inter-var text-center">
            The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab is a dynamic research space dedicated to innovating assistive technologies that enhance smart living. The interdisciplinary research focuses on harnessing cutting-edge research to create seamless, user-centric applications that address real-world challenges in health, wellness, and daily living.  
          </p> 
              
          <div className="m-7 flex justify-center text-center relative z-35">
            <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Image
                  src='/images/PerSIsst_Final 1.svg'
                  alt='persisst logo'
                  width={25}
                  height={100}
                  className="mr-2"
                /> 
                <Link href={"/Research"} className='relative z-40'>     
                  Explore Our Research 
                </Link>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Conflicting Design Part - Correctly Positioned Below */}
      {/* <div className="relative w-full min-h-[70vh] bg-[#1b0946] h-auto bg-grid-white/[0.02] lg:mt-[-5rem] z-20 pt-8 flex flex-col justify-center">
        <img
          src="/bg/Ellipse_Left.png"
          alt="ellipse-left"
          className="absolute bottom-0 left-0 z-10"
        />
        <img
          src="/bg/Ellipse_Right.png"
          alt="ellipse-right"
          className="absolute bottom-0 right-0 z-10"
        />
        <img
          src="/bg/Ellipse_down.png"
          alt="ellipse-down"
          className="absolute bottom-0 left-0 w-full h-auto z-10"
        />
        
        <div className="w-full max-md:p-2 lg:pb-4 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto  relative   rounded-2xl z-30" >
          <CardEventSlider cards={events}/>
        </div>
      </div> */}
    </>
  )
}

export default Hero;

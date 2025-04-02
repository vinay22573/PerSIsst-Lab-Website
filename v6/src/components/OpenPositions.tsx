"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import HowToApply from "@/components/HowToApply";
import Link from "next/link";
import { AvailablePositions, Position } from '../data/positions';
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import '@/styles/positions-card.css';
const HoverEffect = ({
  items,
  className,
}: {
  items: Position[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-800/95 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20 rounded-2xl bg-slate-950  border-2 border-slate-100 dark:border-white/[0.2] group-hover:border-slate-700 p-4">
            <article className="flex flex-col items-center gap-10 text-white">
              <h2 className="text-xl text-[#9961D9] px-6 font-bold text-center font-poppins tracking-wide">
                {item.title}
              </h2>
              <div className="flex flex-col gap-2 text-left text-white">
                <div>
                  <h3 className="text-lg font-semibold tracking-wider">
                    Description:
                  </h3>
                  <p className="text-sm tracking-tight">{item.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider">
                    Qualification:
                  </h3>
                  <p className="text-sm tracking-tight">{item.qualification}</p>
                </div>
              </div>
              <a
                href={item.learnMoreLink}
                className="p-[1.5px] relative mb-3 inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                <div className="text-base font-poppins font-normal px-4 py-2 bg-[#10072B] rounded-[16px] relative group transition duration-200 text-white">
                  Apply now
                </div>
              </a>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
};


const JoinUs = () => {
  return (
    <section className="w-full bg-slate-900">
      <div className="h-[10vh] lg:h-[20vh] bg-slate-950"></div>
      <div className="">
        <div className="mb-4">
          <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl font-medium leading-normal self-stretch bg-gray-950">
            Join Us at
            <span className="text-[#9961D9] block sm:inline"> Persist Lab</span>
          </h1>
        </div>
        <div className="max-container flex flex-col items-center justify-center">
          <h3 className="text-2xl text-white text-center font-poppins font-normal self-stretch py-2">
            Be a Part of Innovative Research
          </h3> 
          <p className="text-center max-w-3xl max-sm:text-sm sm:text-base font-poppins text-white max-sm:px-6 py-2">
            Join PerSIsst Lab to be part of a dynamic team driving innovation in AI, human cognition, mental health, and inclusive systems. Whether you're a student, researcher, or professional, you'll contribute to shaping the future of smart living.
          </p>
          {/* <div className="w-full lg:w-[1280px] flex justify-center items-center mt-5">
            <Link href="https://lets-be-single.com" legacyBehavior>
              <a className="p-[2px] relative mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[15px] relative group transition duration-200 text-white">
                  View Open Positions
                </div>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="max-md:px-2 mx-auto">
        <LampContainer className="flex flex-col items-center justify-center gap-40" >
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Open Positions <br /> @ PerSIsst Lab
          </motion.h1>
        </LampContainer>
        {/* This is the part which we might need removing also */}
        <div className=" w-full relative">
            <div className="flex bg-slate-950/40 flex-col sm:flex-row gap-10 sm:gap-6 items-center justify-centerp-2 lg:p-10 mb-10 w-full  relative z-100">
              <HoverEffect items={AvailablePositions} />
            </div>
          </div>
          
          {/* How to apply */}
          <HowToApply />
      </div>

    </section>
  );
};

export default JoinUs;
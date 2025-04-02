"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { AvailablePositions, Position } from '@/data/positions';
import '@/styles/positions-card.css';
import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="w-full bg-slate-900">
      <div className="h-[20vh] bg-slate-950"></div>
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
          <div className="w-full lg:w-[1280px] flex justify-center items-center mt-5">
            <Link href="https://lets-be-single.com" legacyBehavior>
              <a className="p-[2px] relative mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[15px] relative group transition duration-200 text-white">
                  View Open Positions
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <LampContainer className="flex flex-col items-center justify-center gap-40" >
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Open Positions <br /> @ PerSisst Lab
          </motion.h1>
          <div className=" w-full relative">
            <div className="flex bg-slate-950/40 flex-col sm:flex-row gap-10 sm:gap-6 items-center justify-center p-2 mb-10 w-full relative z-100">
              {AvailablePositions.map((position: Position) => (
                <article
                  key={position.id}
                  className="max-sm:w-full sm:w-[280px] sm:min-w-[280px] px-8 py-5 flex flex-col items-center gap-10 text-white rounded-2xl card__article"
                >
                  <div className="lg:card__scale-1"></div>
                  <div className="lg:card__scale-2"></div>
                  <div className="relative z-[3] w-full flex flex-col gap-5 rounded-xl">
                    <h2 className="text-xl text-[#9961D9] px-6 font-bold text-center font-poppins tracking-wide">
                      {position.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-left text-white">
                      <div>
                        <h3 className="text-lg font-semibold tracking-wider">Description:</h3>
                        <p className="text-sm tracking-tight">{position.description}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-wider">Qualification:</h3>
                        <p className="text-sm tracking-tight">{position.qualification}</p>
                      </div>
                    </div>
                  </div>
                  <a href={position.learnMoreLink} className="p-[1.5px] relative mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-2xl" />
                    <div className="text-base font-poppins font-normal px-4 py-2 bg-[#10072B] rounded-[16px] relative group transition duration-200 text-white">
                      Apply now
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </LampContainer>
      </div>

    </section>
  );
};

export default JoinUs;
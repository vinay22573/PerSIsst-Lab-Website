"use client";
import React from "react";
import OurWorkCardSlider from '@/components/OurWorkCardSlider'
import {OurWorkCards} from '@/data/OurWorkCards'
import FuturePubCard from '@/components/FuturePubCard';
import FuturePublications from '@/data/FuturePub';

function Research() {
  return (
    <main className="relative w-full bg-slate-950 text-white">
      <section className="h-[10vh] lg:h-[20vh] bg-slate-950 "></section>
      <section className="w-full  pb-6">
        <div className="mb-8">
          <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl max-md:font-bold font-semibold max-md:tracking-wide leading-normal self-stretch bg-gray-950">
            Our <span className="text-[#9961D9]">Work</span>
          </h1>
        </div>
        {/* Our Work Card */}
        <div className="w-full pb-2 max-md:px-1 md:balanced-width md:w-[840px] mx-auto rounded-xl overflow-hidden relative z-0 border-b-4 border-b-purple-500  border-r-2 border-r-purple-500 ">
        <OurWorkCardSlider cards={OurWorkCards} />
        </div>
      </section>
      {/* <section className="w-full ">
        <div className="mb-8">
        <h1 className="py-5 text-white text-center font-poppins text-4xl md:text-5xl max-md:font-bold font-semibold max-md:tracking-wide leading-normal self-stretch bg-gray-950">
            Future<span className="text-[#9961D9]"> Publications</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:gap-8 items-center justify-center p-2 pb-10 w-full">
        {FuturePublications.map((pub, index) => (
        <FuturePubCard
          key={index}
          title={pub.title}
          description={pub.description}
          imageUrl={pub.imageUrl}
          link={pub.link}
        />
      ))}
        </div>
      </section> */}

    </main>
  );
}

export default Research;

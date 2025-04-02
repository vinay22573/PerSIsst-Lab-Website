import React from 'react';
import Link from "next/link";
import { AvailablePositions, Position } from '../data/positions';
import { AnimatePresence, motion } from "framer-motion";
import '@/styles/positions-card.css';
import { cn } from "@/lib/utils";
import { useState } from "react";

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
        <Link
          href={item.learnMoreLink}
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
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
          <div className="relative z-20 rounded-2xl bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 p-4">
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
        </Link>
      ))}
    </div>
  );
};

function AvailablePositionsSection() {
  return (
    <div className="bg-gray-300 w-full">
      <div className="flex bg-[#130930] flex-col sm:flex-row gap-10 sm:gap-6 items-center justify-center p-2 mb-10 w-full">
        <HoverEffect items={AvailablePositions} />
      </div>
    </div>
  );
}

export default AvailablePositionsSection;
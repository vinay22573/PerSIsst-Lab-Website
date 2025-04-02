"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Dr. Pragma Kar",
    designation: "Lab Director",
    image:
      "/images/pragmakar.jpg",
  },
  {
    id: 2,
    name: "Siddhant Bali",
    designation: "Web Admin",
    image:
      "/images/bali.jpeg",
  },

];

const ToolTip = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export default ToolTip;

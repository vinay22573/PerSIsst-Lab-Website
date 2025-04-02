"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        containerClassName,
        "bg-transparent"
      )}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
      <div
        className={cn(
          "h-full px-4 sm:px-10 relative border border-purple-500/[0.7] rounded-2xl",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default WobbleCard;
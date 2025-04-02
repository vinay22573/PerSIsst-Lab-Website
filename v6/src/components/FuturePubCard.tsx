"use client";
import React from 'react';
interface FuturePubCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const FuturePubCard: React.FC<FuturePubCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="w-full sm:w-[360px] p-8 flex flex-col items-center space-y-5 text-white border-b-4 border-b-purple-500 bg-purple-900/30 border-r-2 border-r-purple-500 rounded-2xl">
      <div className="flex flex-col rounded-2xl">
        <img className="object-cover w-full aspect-[3/2] rounded-2xl" src={imageUrl} alt={title} />
      </div>
      <h2 className="text-[#9961D9] text-center font-poppins text-xl font-bold leading-normal capitalize px-10 py-2">
        {title}
      </h2>
      <p className="text-center px-8">{description}</p>
      <a href={link} className="p-[3px] relative mb-3">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-lg" />
        <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[4px] relative group transition duration-200 text-white">
          Learn More
        </div>
      </a>
    </div>
  );
};

export default FuturePubCard;

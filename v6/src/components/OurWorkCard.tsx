"use client";
import React from "react";

// Define the type for the 'card' object
interface Card {
    image: string;
    imageAlt: string;
    title: string;
    tags: string[];
    description: string;
    learnMoreLink: string;
}

interface OurWorkCardProps {
    card: Card;
}

const OurWorkCard: React.FC<OurWorkCardProps> = ({ card }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 rounded-lg bg-slate-950 mb-6">
            {/* Image Section */}
            <div className="flex-1 w-full md:w-1/2">
                <img
                    className="object-cover h-full md:w-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
                    src={card.image}
                    alt={card.imageAlt}
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 w-full md:w-[1/2]">
                <div className="flex flex-col">
                    <h2 className="text-[#9961D9] text-center text-3xl font-bold capitalize leading-normal mt-6 px-5 font-poppins">
                        {card.title}
                    </h2>
                    <div className="flex justify-center space-x-2">
                        {card.tags.map((tag, idx) => (
                            <button
                                key={idx}
                                className="inline-flex items-start gap-2 px-4 py-1 border-2 border-[#9961D9] text-[#9961D9] rounded-[8px] font-semibold text-sm"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 items-center mt-3">
                        <p className="text-center text-base font-poppins text-white px-8">
                            {card.description}
                        </p>

                        <a href={card.learnMoreLink} className="p-[3px] relative mb-3">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-lg" />
                            <div className="text-base font-poppins font-semibold px-4 py-2 bg-[#10072B] rounded-[4px] relative group transition duration-200 text-white">
                                Learn more
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorkCard;

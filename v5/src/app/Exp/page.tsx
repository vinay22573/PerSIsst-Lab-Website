"use client"
import React from 'react'
import ToolTip from '@/components/ToolTip'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from "@/lib/utils"

const page = () => {
  return (
    <div>
                <ToolTip/>
                <div className="m-7 flex justify-center text-center">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  <Image
              src='/images/PerSIsst_Final 1.svg'
              alt='persisst logo'
              width={25}
              height={100}
              className="mr-2"
              
              
            /> <Link href={"/About/Lab"}>     
Explore Research </Link>
  </span>
</button>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>    </div>

    <div className="flex justify-center space-x-5 my-5 mx-5">
    <CardDemo
  title="Blog 1"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/2.jpg"
  link="https://medium.com/"
/>
<CardDemo
  title="Blog 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/1.webp"
  link="https://medium.com/"
/>
<CardDemo
  title="Blog 3"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/3.png"
  link="https://medium.com/"
/>
<CardDemo
  title="Blog 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/4.png"
  link="https://medium.com/"
/>
</div>
<div className="flex justify-center space-x-5 my-5 mx-5">
<CardDemo
  title="Blog 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/4.png"
  link="https://medium.com/"
/>
<CardDemo
  title="Blog 1"
  description="Coming Soon..."
  author="Pragma Kar"
  readTime="2 min read"
  avatarSrc="/images/pragmakar.jpg"
  backgroundImgSrc="/bg/2.jpg"
  link="https://medium.com/"
/>
<CardDemo
  title="Blog 2"
  description="Coming Soon..."
  author="Siddhant Bali"
  readTime="5 min read"
  avatarSrc="/images/bali.jpeg"
  backgroundImgSrc="/bg/1.webp"
  link="https://medium.com/"
/>
</div>
    
    </div>
  )

}

export default page

interface IconCardProps {
  iconSrc: string; // Source for the icon image
  title: string;   // Title of the card
  description: string; // Description text for the card
}

const IconCard: React.FC<IconCardProps> = ({ iconSrc, title, description }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const { left, top } = card.getBoundingClientRect();
    const x = e.clientX - left; // Mouse X relative to card
    const y = e.clientY - top;  // Mouse Y relative to card
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="iconcard">
      <div className="icontainer">
        <div
          className="icard"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        >
          <div className="icontent">
            <img className="iicon" src={iconSrc} alt={`${title} Icon`} />
            <h3 className="ititle">{title}</h3>
            <p className="idescription">{description}</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};


const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];




  interface CardDemoProps {
    title: string;
    description: string;
    author: string;
    readTime: string;
    avatarSrc: string;
    backgroundImgSrc: string;
    link:  string;
  }
  
  const CardDemo: React.FC<CardDemoProps> = ({
    title,
    description,
    author,
    readTime,
    avatarSrc,
    backgroundImgSrc,
    link,
  }) => {
    return (
      <div className="max-w-xs w-full group/card">
        <Link href={link} target="_blank" style={{ pointerEvents: 'auto' }}>
        
        <div
          className={cn(
            'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4'
          )}
          style={{
            backgroundImage: `url(${backgroundImgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute w-full h-full bg-black opacity-20 top-0 left-0 transition duration-300 group-hover/card:bg-black hover/card:opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <Image
              height={100}
              width={100}
              alt="Avatar"
              src={avatarSrc}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {author}
              </p>
              <p className="text-sm text-gray-400">{readTime}</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              {description}
            </p>
          </div>
        </div>
        </Link>
      </div>
    );
  };
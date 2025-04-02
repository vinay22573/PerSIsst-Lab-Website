
'use client'
import Hero from "@/components/Hero";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import Events from "@/components/EventSlider";
import { HeroHighlight,Highlight } from '@/components/ui/h2';
import { AnimatePresence, motion } from "framer-motion";
const BG2 = () => {
  return (
    <> {/* Added padding top and bottom */}
      <HeroHighlight containerClassName=""> {/* Adjusted height 125 */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
<div className="pt-10">
    <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            aspectRatio: "11 / 5",
            width: "100%",
          }}
        >
                  <h2 className="text-3xl font-bold text-center mb-8 z-10">Events</h2><Events events={events} />
           
        </div></div>
        <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
             <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={Reviews}
                direction="right"
                speed="slow"
      />
            </div> 
        </div>
    </div>
    
    

          
        </motion.div>
        {/* <WobbleCardDemo /> */}

      </HeroHighlight>
      
    </>
  );
}




    const events = [
      {
        type: "Upcoming Events",
        title: "Workshop on Cognitive Assistive Technologies",
        description: "A hands-on workshop exploring cognitive technologies and their real-world applications in assistive systems.",
        date: "12 Nov-2024",
        location: "A-413 PerSisst-Lab, IIITD",
        background_image_url: "/bg/1.webp",
      },
      {
        type: "Upcoming Events",
        title: "AI and Ethics Seminar",
        description: "Join us for an engaging seminar on the ethical implications of AI in modern society.",
        date: "20 Nov-2024",
        location: "B-210 Conference Hall, IIITD",
        background_image_url: "/bg/2.jpg",
      },
      {
        type: "Upcoming Events",
        title: "Hackathon: Code for Change",
        description: "A 48-hour coding marathon aimed at solving societal problems through innovative software solutions.",
        date: "28 Nov-2024",
        location: "C-101 Tech Hub, IIITD",
        background_image_url: "/bg/3.png",
      },
    ];



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <BG2/>
      

    </main>
  );
}
const Reviews = [
  {
    quote:
      'My experience at the Persisst Lab has not only deepened my understanding of web development but also fostered meaningful connections with a supportive team and a wise, humble professor. They encourage creativity and collaboration, helping me grow more reliable than focused solely on perfectionism.',
    name: 'Siddhant Bali',
    title: 'B.Tech. CSD 2026 Batch',
  },
  {
    quote:
      'I joined Persist when it was just an idea, and I’ve seen the dedication and innovation that fuel the lab. What stands out most is the professor’s unwavering support. Her mentorship was crucial when I struggled and helped me a lot during project. Every project is a chance to learn and grow through trial and success.',
    name: 'Vinay Kumar Dubey',
    title: 'B.Tech. CSD 2026 Batch',
  },
  {
    quote:
      'I joined PerSIsst Lab to design the website, helping to realize the lab’s vision through a digital platform. Working closely with the professor and team, I shaped how their groundbreaking research is presented. This experience has allowed me to learn and refine my skills while creating a user-friendly site that reflects the lab\'s mission and values.',
    name: 'Daksh',
    title: 'B.Tech. CSD 2026 Batch',
  },
  

];

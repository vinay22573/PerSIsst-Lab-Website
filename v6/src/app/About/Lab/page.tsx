"use client"
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Purpose from "@/components/OurPurpose";

function Lab() {
  return (
    <section>
      <div className="bg-[#010114] min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Ellipse layer */}
          <img
            src="/bg/Ellipse_8.png"
            alt="ellipse"
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10"
          />

          {/* Vector layer */}
          <img
            src="/bg/Vector.png"
            alt="vector"
            className="absolute top-[25%] md:top-[20%] lg:top-[25%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20 lg:w-[600px]"
          />
        </div>
        <div className="w-full h-[20vh]">
          {/* This is just to take the nav space */}
        </div>
        <div className="relative z-30"> {/* Reserve space for navbar */}
          <BG2 />
        </div>
      </div>
      <div className='w-full h-auto bg-slate-900 relative'>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* left ellipse */}
          <img
            src="/bg/Ellipse_Left.png"
            alt="ellipse-left"
            className="absolute bottom-0 left-0 z-10"
          />
          {/* right ellipse */}
          <img
            src="/bg/Ellipse_Right.png"
            alt="ellipse-right"
            className="absolute bottom-0 right-0 z-10"
          />

          
        </div>

        <Purpose />
      </div>
    </section>
  );
}



const OurPrpose = () => {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "Our",
    },
    {
      text: "Purpose",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 15 to 5 rem height */}
      <TypewriterEffectSmooth words={words} />
      <p className=" pt-3 font-normal text-white text-sm text-center md:text-lg  max-w-screen-lg mx-auto max-md:px-4">
        The Lab aims at facilitating cutting-edge research in the field of Ubiquitous Computing, Pervasive Sensing, Artificial Intelligence and allied domains to solve real-world problems in the interdisciplinary domains of Cognitive Psychology, Health & Wellness, Smart Space, Inclusive and Accessible Assistive System design, and related areas.
      </p>
    </div>
  );
}

const Type = () => {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "About",
    },
    {
      text: "PerSIsst",
      className: "text-purple-500",
    },
    {
      text: "Lab",
      className: "text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

const BG2 = () => {
  return (
    <>
      <Type />
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="font-normal text-center text-sm md:text-lg  max-w-screen-lg mx-auto text-white max-md:px-4">
            Our work spans a variety of domains, from smart entertainment to education, always driven by the core belief that pervasive, intelligent digital assistants—powered by secure, ubiquitous physiological and behavioral sensing—can make a significant impact. By utilizing state-of-the-art AI techniques, learning approaches, and bio-inspired models, we aim to address global, societal, and personal challenges, making life smarter, healthier, and more connected.
          </p>
          <p className="font-normal text-center text-sm md:text-lg  max-w-screen-lg mx-auto text-white max-md:px-4">
            Our work spans a variety of domains, from smart entertainment to education, always driven by the core belief that pervasive, intelligent digital assistants—powered by secure, ubiquitous physiological and behavioral sensing—can make a significant impact.
          </p>

        </div>
        <div className="relative">
          {/* Vector layer */}
          <img
            src="/bg/Vector.png"
            alt="vector"
            className=" absolute top-[10%] lg:top-[15%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[600px]"
          />
          <OurPrpose />
        </div>
      </div>
    </>
  );
}

















const Type2 = () => {
  const words = [
    {
      text: " ",
      className: "text-purple-500",
    },
    {
      text: "Our",
    },
    {
      text: "Purpose",
      className: "text-purple-500",
    },

  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="  font-normal text-center md:text-lg  max-w-screen-lg mx-auto">
        The Lab aims at facilitating cutting-edge research in the field of Ubiquitous Computing, Pervasive Sensing, Artificial Intelligence and allied domains to solve real-world problems in the interdisciplinary domains of Cognitive Psychology, Health & Wellness, Smart Space, Inclusive and Accessible Assistive System design, and related areas.
      </p>
    </div>
  );
}

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
      </div>
    </div>
  );
};

const OurPurpose = [
  {
    iconSrc: "/images/purpoes/Mission.svg",
    title: "Mission",
    description:
      "Transforming lives through smart innovations - people face challenges from basic issues like cognition and health to advanced needs like interactivity and smart assistance.",
  },
  {
    iconSrc: "/images/purpoes/Vision.svg",
    title: "Vision",
    description:
      "Weaving a smarter tomorrow for all - curating a world where intelligent and smart technology can seamlessly integrate with and enhance the quality of daily living through PerSIsst Lab.",
  },
  {
    iconSrc: "/images/purpoes/Value.svg",
    title: "Value",
    description:
      "Assist to innovate, innovate to assist - valuing innovations that involve creative and free-thinking, individual as well as team effort, and a spirit to bring a positive transformation to lives.",
  },
];


const Card_div2 = () => {
  return (
    <div className="py-5 flex flex-col lg:flex-row items-center justify-center bg-gray-900 w-full gap-10 pb-40 mx-auto px-20 relative z-15">
      {OurPurpose.map((item, index) => (
        <IconCard
          key={index}
          iconSrc={item.iconSrc}
          title={item.title}
          description={item.description}
        />
      ))
      }
    </div>
  )
}







// Look the Director has one another folder so I commented it out here if you find it worth then feel free to uncomment it
// const Director = () => {
//   return (
//     <>
//       <div className="bg-[#010114] h-screen overflow-hidden relative">
//         <div className="absolute top-0 left-0 w-full h-full">
//           {/* Ellipse 1 Left */}
//           <img
//             src="/bg/Ellipse_Left.png"
//             alt="ellipse"
//             className="absolute bottom-0 left-0 z-10"
//           />
//           {/* Ellipse 2 Right */}
//           <img
//             src="/bg/Ellipse_Right.png"
//             alt="ellipse"
//             className="absolute bottom-0 right-0 z-10"
//           />
//           {/* Ellipse 3 down */}
//           <img
//             src="/bg/Ellipse_down.png"
//             alt="ellipse"
//             className="absolute bottom-0 left-0 w-full h-auto z-10"
//           />
//           {/* Vector layer */}
//           <img
//             src="/bg/Vector.png"
//             alt="vector"
//             className="absolute top-[25%] md:top-[20%] lg:top-[30%] left-[45vw] md:left-[40vw] lg:left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-20"
//           />
//         </div>
//         <div className="relative z-30 pt-[15vh]"> {/* Reserve space for navbar */}
//           <Type3 />
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full  p-4">
//             <div className="relative col-span-1 lg:col-span-2 h-full min-h-[450px]">
//               <div className="absolute top-[10%] w-full h-[15%] ">
//                 <h1 className="m-0 text-center p-4  text-white text-5xl">Dr Pragma Kar</h1>
//               </div>
//               <div className="absolute top-[15%] w-full h-[60%]  flex flex-col justify-center items-center text-center text-white text-xl">
//                 <h3 className="text-4xl text-[#9961D9] p-4">Assistant Professor, PhD, Jadavpur University</h3>
//                 <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Founder &amp; Director, Pervasive Sensing &amp; Intelligent Assistive Systems (PERSISST) Lab</p>
//                 <p className='pl-3 pr-5 pt-2 pb-5 text-1.5xl'>Associate Faculty, Center for Design and New Media (CDNM)</p>
//                 <p className='pl-3 pr-5 pb-5 pt-2 text-1.5xl'>Indraprastha Institute of Information Technology (IIIT) Delhi</p>
//               </div>
//               <div className='absolute top-[75%] w-full h-20% flex justify-center items-center'>
//                 <div className="w-[50%] h-[20%] grid grid-cols-4 gap-1 justify-items-center items-center ">
//                   <div className="link">
//                     <a href="#">
//                       <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
//                     </a>
//                   </div>
//                   <div className="link">
//                     <a href="#">
//                       <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
//                     </a>
//                   </div>
//                   <div className="link">
//                     <a href="#">
//                       <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
//                     </a>
//                   </div>
//                   <div className="link">
//                     <a href="#">
//                       <img className="w-10 h-10 block mb-1" src="/linkedin.png" alt="LinkedIn Icon" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-1 min-h-[450px]">
//               <img src="/Mamwithbg.png" alt="mam" className='w-full h-full' />
//             </div>
//           </div>
//         </div>

//       </div>

//     </>
//   );
// }
// Look the type 3 seemed to be of no use in this page so I have commented it out feel free to uncomment if its of some use
// const Type3 = () => {
//   const words = [
//     {
//       text: " ",
//       className: "text-purple-500",
//     },
//     {
//       text: "About",
//     },
//     {
//       text: "Lab",
//       className: "text-purple-500",
//     },
//     {
//       text: "Director",
//       className: "text-purple-500",
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center mt-4rem  h-[10rem]  ">
//       <TypewriterEffectSmooth words={words} />
//     </div>
//   );
// }


export default Lab;

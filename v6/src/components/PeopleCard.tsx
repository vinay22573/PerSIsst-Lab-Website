"use client";
import Image from 'next/image';
import Link from 'next/link';

// Define the props interface
interface SocialLink {
  href: string;
  icon: string;
}

interface PeopleCardProps {
  name: string;
  title: string;
  description: string;
  bgImageFront: string;
  bgImageBack: string;
  views: string,
  socialLinks: SocialLink[];
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  name,
  title,
  description,
  bgImageFront,
  bgImageBack,
  views,
  socialLinks
}) => {
  return (
    <div className="w-[300px] h-[450px] bg-transparent rounded-2xl group perspective">
      <div className="relative preserve-3d group-hover:vinay-flip-180 w-full h-full duration-1000">
        {/* Front Side */}
        <div className="absolute backface-hidden border-2 border-purple-500 w-full h-full p-4 rounded-2xl">
          <Image
            src={bgImageFront}
            alt="Background Image"
            className="object-cover"
            width={300}
            height={450}
           
          />
          <div className="font-poppins text-center">
            <h3 className="text-lg font-medium text-white leading-normal pt-2">{name}</h3>
            <p className="text-base font-medium tracking-tight text-purple-500">{title}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute vinay-flip-180 backface-hidden w-full h-full bg-slate-200 rounded-xl">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <div className="w-[150px] h-[150px] flex-shrink-0 rounded-full overflow-hidden border-[5px] border-purple-500 p-1 mt-6">
              <Image
                src={bgImageBack}
                alt="Profile Image"
                className="object-cover rounded-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col flex-1 items-center justify-center gap-1">
              <h2 className="text-xl flex-1 font-bold text-purple-700 pt-2">{name}</h2>
              <p className="text-base flex-1 text-purple-500 text-center py-1 px-4 font-semibold tracking-wider">
                {description}
              </p>
              <p className="text-sm flex-1 text-slate-500 font-medium text-center py-1 px-4 ">
                {views}
              </p>
            </div>
            {/* Social Links */}
            <div className="bg-slate-100 flex-1 px-6 py-1 font-semibold cursor-pointer text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-125 flex justify-center items-center gap-2 shadow-md">
              {socialLinks.map(({ href, icon }, index) => (
                <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon}
                    alt={`social-icon-${index}`}
                    className="rounded-full"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;

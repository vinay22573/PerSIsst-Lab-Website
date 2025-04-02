"use client"
import Image from "next/image";
function Background() {
    return (
        <div className="bg-[#010114] h-screen overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full">
                {/* Ellipse layer */}
                <img 
                    src="./bg/Ellipse 8.png" 
                    alt="ellipse" 
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-10" 
                />
                
                {/* Vector layer */}
                <img 
                    src="./bg/Vector.png" 
                    alt="vector" 
                    className="absolute top-[25%] md:top-[20%] lg:top-[15%] left-[45vw] md:left-[40vw] lg:left-[35vw] transform -translate-x-1/2 -translate-y-1/2 z-20" 
                />
            </div>
        </div>
    );
}

export default Background;

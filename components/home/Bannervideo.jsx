"use client";
import Link from "next/link";
import MotionButton from "../../components/home/MotionButton";

const Bannervideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        src="/homevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center md:pl-20 p-4 ">
        <div className="flex flex-col gap-6 text-white text-4xl font-bold tracking-wide font-sans">
          <p className=" md:text-lg text-xs">VIBE – THRILL – REPEAT</p>
          <h1 className="md:text-4xl text-2xl md:pr-100">
            The first-ever London boat party to have the iconic Tower Bridge
            lift exclusively for our event.
          </h1>
          <h3 className="md:text-2xl text-sm">
            Your next unforgettable night starts with us
          </h3>
          <div>
            {" "}
            <Link href={``}>
              <MotionButton
                className={`md:p-4 p-3 md:text-2xl text-lg text-sans`}
              >
                Book Now
              </MotionButton>
              {/* <button className="bg-indigo-600 hover:bg-indigo-800 md:text-2xl text-lg font-normal md:p-4 p-2 
              rounded-xl cursor-pointer font-semibold">
                Book Now
              </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannervideo;

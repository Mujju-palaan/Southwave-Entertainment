"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Live = ({heading, description}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:gap-4 gap-2 font-serif text-center md:px-30 px-4 md:py-10 md:mt-4 mt-6">
        <h1 className=" md:text-5xl text-2xl font-semibold ">{heading}</h1>
        <p className="text-stone-500 md:text-2xl text-sm">{description}</p>
      </div>

      <div>
        <motion.div
          animate={{
            rotate: [0, -1, 1, -1, 0],
            filter: [
              "drop-shadow(0 0 0 rgba(99,102,241,0))",
              "drop-shadow(0 0 25px rgba(99,102,241,0.85))",
              "drop-shadow(0 0 0 rgba(99,102,241,0))",
            ],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-full h-full object-cover justify-center flex items-center p-10"
        >
          <Image
            src={`/services/Bussiness-counselting.jpg`}
            width={300}
            height={300}
            alt=""
            className="rounded-xl"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Live;

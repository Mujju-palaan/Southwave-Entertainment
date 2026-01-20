"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading_desc from "../Heading_desc";
import LiveData from '../../app/data/EventsOngoingData'

const Live = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-4 md:mt-10">
      {/* Heading Section */}
      <Heading_desc title={heading} description={description} />

      {/* Image Animation */}
      <div className="flex justify-center">
        <motion.div
          initial={{
            rotate: 0,
            filter: "drop-shadow(0 0 0 rgba(99,102,241,0))",
          }}
          whileInView={{
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
          viewport={{
            once: false, // set false if you want it every time it enters view
            amount: 0.2, // triggers when 50% visible
          }}
          className="flex items-center justify-center px-10"
        >
          {LiveData.map((i) => (
            <Image
              key={i.id}
              src={i.image}
              width={300}
              height={300}
              alt={i.image}
              className="rounded-xl"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Live;

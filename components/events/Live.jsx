"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading_desc from "../Heading_desc";
import Link from "next/link";

const Live = ({ heading, description, Data }) => {
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
          {Data.map((i) => (
            <Link key={i.id}
            href={`https://www.fatsoma.com/e/sk27fua9/tolly-wave-night-london`}
            target="_blank">
            <Image
              src={i.image}
              width={300}
              height={300}
              alt={i.image}
              className="rounded-xl"
            />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Live;

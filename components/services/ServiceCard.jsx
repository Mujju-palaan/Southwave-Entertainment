"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({ image, title, decription, href }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.22)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="md:w-1/4 flex flex-col gap-2 rounded-2xl md:p-6 p-4 md:m-0 m-4 bg-white shadow-lg"
    >
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={image}
            height={300}
            width={300}
            alt="img"
            className="rounded-xl object-cover"
          />
        </motion.div>
      </div>

      <div className="text-2xl font-semibold">{title}</div>

      <div className="text-stone-500">{decription}</div>

      <motion.button
        whileHover={{ x: 6 }}
        transition={{ duration: 0.25 }}
        className="self-start text-indigo-500 font-medium cursor-pointer"
      >
        <Link href={href}>View More →</Link>
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;

"use client";

import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------------- Reusable Counter ---------------- */
const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const [value, setValue] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setValue(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, to, {
      duration: 2.5,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, motionValue, to]);

  return (
    <p ref={ref} className="text-xl md:text-4xl font-bold">
      {value}
      {suffix}
    </p>
  );
};

/* ---------------- Status Section ---------------- */
const Status = () => {
  return (
    <div className="relative md:h-[420px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581245869344-f9915e401773?w=870&auto=format&fit=crop"
        alt="About Us"
        width={800}
        height={420}
        className="h-full w-full object-cover"
        priority
      />

      <div
        className="absolute inset-0 flex items-center justify-around bg-black/30
        text-white/90 text-center font-sans tracking-widest text-sm md:text-3xl font-semibold"
      >
        {/* Events Organised */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1"
        >
          <Counter to={100} suffix="+" />
          <p>Events Organised</p>
        </motion.span>

        {/* Clients Satisfied */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1"
        >
          <Counter to={100} suffix="%" />
          <p>Clients Satisfied</p>
        </motion.span>

        {/* Dance Floors */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1"
        >
          <Counter to={60} suffix="+" />
          <p>Dance Floors</p>
        </motion.span>
      </div>
    </div>
  );
};

export default Status;

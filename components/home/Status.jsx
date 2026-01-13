import Image from "next/image";
import React from "react";

const Status = () => {
  return (
    <div className="relative md:h-[420px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581245869344-f9915e401773?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full md:object-cover object-contain rounded block"
        alt="About Us"
        width="800"
        height="420"
      />

      <div
        className="absolute inset-0 flex items-center text-center font-sans justify-around  bg-black/30
        text-white/90 md:text-4xl text-2xl font-bold tracking-widest "
      >
        <span>
          <p>100+</p>
          <p>Events Organised</p>
        </span>
        <span>
          <p>100%</p>
          <p>Clients Satisfied</p>
        </span>
        <span>
          <p>80+</p>
          <p>Dance Foors</p>
        </span>
      </div>
    </div>
  );
};

export default Status;

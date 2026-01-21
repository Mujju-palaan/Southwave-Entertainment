import React from "react";

const OurVision = () => {
  return (
    <div
      className="relative max-w-sm rounded-[18px] border border-gray-300
         bg-white md:p-6 p-3 md:m-0 m-3 shadow-sm rotate-[2.5deg]"
    >
      {/* Decorative top icon */}
      <div
        className="absolute -top-3 right-6 h-8 w-8 rounded-full bg-emerald-500 
      flex items-center justify-center"
      >
        <span className="block h-3 w-3 rounded-full bg-white"></span>
      </div>

      <h3 className="mb-3 text-xl font-medium tracking-wide">VISION</h3>

      <p className="text-sm leading-relaxed text-gray-600">
        To be the pulse of unforgettable nightlife and live entertainment—where
        music, artists, and audiences come together to create moments that live
        beyond the night. We envision a culture where every event feels
        personal, every performance feels electric, and every crowd leaves with
        a story to tell.
      </p>
    </div>
  );
};

export default OurVision;

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative md:h-[420px] w-full overflow-hidden">
      <Image
        src="/about.jpg"
        className="h-full w-full md:object-cover object-contain rounded-xl"
        alt="About Us"
        width="800"
        height="420"
      />

      <h1
        className="absolute inset-0 flex items-center justify-center 
    text-white/80 md:text-8xl text-2xl font-bold tracking-widest "
      >
        ABOUT US
      </h1>
    </div>
  );
};

export default Banner;

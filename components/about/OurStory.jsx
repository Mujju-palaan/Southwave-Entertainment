import Image from "next/image";
import { MdPerson } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

const OurStory = () => {
  return (
    <div className="lg:p-12 p-4">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight p-2">
        Our Story, Vision, Values
      </h1>
      <div className="md:flex xs:flex-col md:gap-4 lg:gap-10 gap-4 p-1">
        <div className=" md:text-lg text-sm">
          <div className="md:text-2xl">
            <RiDoubleQuotesL />
          </div>
          <div>
            Our team of experts works tirelessly to bring your vision to life,
            ensuring every project we undertake not only meets but exceeds
            expectations. We are committed to transforming ideas into impactful
            digital experiences that connect with your audience and deliver
            lasting results.
          </div>
          <div className="h-full w-full md:mt-6 mt-2 mb-2">
            <Image
              className="h-full md:h-100 w-full md:object-cover object-contain rounded-xl"
              alt="About Us"
              src="/about/team.jpeg"
              width="800"
              height="420"
            />
          </div>
        </div>

        <div
          className="bg-indigo-500 text-amber-50  lg:text-lg text-[12px] lg:p-10 md:p-8 p-4 rounded-xl 
            md:block hidden w-full "
        >
          <span
            className="flex flex-row-reverse text-cyan-300 text-md md:text-4xl font-serif 
          font-semibold text-end lg:pb-6"
          >
            <h1 className="text-xl">ABOUT US</h1>
            {/* <MdPerson/> */}
          </span>

          <p className="text-[16px]">
            We believe in the power of collaboration and creativity. By working
            closely with our clients and partners, we gain a deep understanding
            of their vision and goals—allowing us to deliver experiences that
            truly make an impact.
          </p>
          <br />
          <p className="text-[16px]">
            Our approach brings together music, artists, and event expertise to
            create seamless, high-energy experiences that audiences connect with
            and remember. From intimate gatherings to large-scale events, we
            focus on detail, flow, and vibe to ensure every moment feels right.
          </p>
          <br />
          <p className="text-[16px]">
            By staying ahead of trends and embracing fresh ideas in
            entertainment and nightlife, we create events that don’t just meet
            expectations—they set the mood and raise the bar. Let us help you
            turn your ideas into unforgettable experiences that leave a lasting
            impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;

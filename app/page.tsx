import BlogSwiper from "../components/blog/BlogSwiper";
import Event from "../components/events/Event";
import OngoingEventsData from "./data/EventsOngoingData";
import Status from "../components/home/Status";
import Bannervideo from '../components/home/Bannervideo'

export default function Home() {
  return (
    <div>
      <Bannervideo />
      
      {/* ------------- Eents  ------------- */}
      <Event
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={OngoingEventsData}
      />

      {/* ------------- status bar ------------- */}
      <Status />

      {/* ------------- Blog ------------- */}
      <div>
        <div className="flex flex-col gap-2 font-serif text-center md:px-30 px-4 md:py-0 md:mt-14 mt-6">
          <h1 className=" md:text-5xl text-2xl font-semibold ">{`Blogs`}</h1>
          <p className="text-stone-500 md:text-2xl text-sm">
            {`peoples who revied our events, who where satisfied with us`}
          </p>
        </div>
        <BlogSwiper />
      </div>
    </div>
  );
}

import BlogSwiper from "../components/blog/BlogSwiper";
import Event from "../components/events/Event";
import Status from "../components/home/Status";
import Bannervideo from "../components/home/Bannervideo";
import ServiceMenu from "../components/services/ServiceMenu";
import Live from "../components/events/Live";
import GalleryHome from "../components/gallery/GalleryHome";
import Heading_desc from "@/components/Heading_desc";
import LiveData from '../app/data/EventsOngoingData'
import Testimonials from './(service)/testimonials/page'

export default function Home() {
  return (
    <div>
      <Bannervideo />

      {/* ------------- Events  ------------- */}
      <Live
        heading={`Live Events`}
        description={`From live performances to energetic crowd moments, our events are all about good music and great experiences. See what’s coming up and be part of the next one.`}
        Data={LiveData}
      />

      {/* <Event
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={OngoingEventsData}
      /> */}

      <div className="md:my-15">
        <ServiceMenu />
      </div>
      

      {/* ------------- status bar ------------- */}
      <Status />

      {/* ------------- Blog ------------- */}
      <div className="md:my-10">
        <Heading_desc
          title={`Blogs`}
          description={`Insights from the front row of nightlife—exploring DJ culture, live music, artists, and the craft behind unforgettable events.`}
        />
        <BlogSwiper />
      </div>

        {/* <Heading_desc
          title={`Partiers gallery`}
          description={`A snapshot of the energy, the crowd, and the moments that define our nights. Every frame captures the vibe, the movement, and the people who made it unforgettable.`}
        /> */}
        {/* <GalleryHome /> */}

        {/* <Testimonials /> */}

    </div>
  );
}

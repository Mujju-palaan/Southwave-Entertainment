import UpcomingEventsData from "../../data/EventsUpcomingData";
import LiveData from "../../data/EventsOngoingData";
import CompletedEventsData from "../../data/EventsCompletedData";
import Event from "../../../components/events/Event";
import Live from "../../../components/events/Live";

const Events = () => {
  return (
    <>
      <Live
        heading={`Live Events`}
        description={`From live performances to energetic crowd moments, our events are all about good music and great experiences. See what’s coming up and be part of the next one.`}
        Data={LiveData}
      />

      <Event
        heading={`Upcomming Event`}
        description={`From iconic parties to sold-out club nights, the energy never fades. Discover what’s coming next and reserve your place before it sells out.`}
        EventsData={UpcomingEventsData}
        delaytime={1400}
      />

      {/* <Event
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={OngoingEventsData}
      /> */}

      <Event
        heading={`Events we hosted`}
        description={`A showcase of moments brought to life — from exclusive parties to large-scale celebrations, our curated events have set the standard for unforgettable experiences, leaving lasting memories for every guest.`}
        EventsData={CompletedEventsData}
        delaytime={1100}
      />
    </>
  );
};

export default Events;

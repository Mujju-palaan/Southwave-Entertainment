import UpcomingEventsData from "../../data/EventsUpcomingData";
import OngoingEventsData from "../../data/EventsOngoingData";
import CompletedEventsData from "../../data/EventsCompletedData";
import Event from "../../../components/events/Event";
import Live from "../../../components/events/Live";


const Events = () => {
  return (
    <>
      <Event
        heading={`Upcomming Event`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={UpcomingEventsData}
      />

      <Event
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={OngoingEventsData}
      />

      <Live
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
      />

      <Event
        heading={`Events we hosted`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={CompletedEventsData}
      />
    </>
  );
};

export default Events;

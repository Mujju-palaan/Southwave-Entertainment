import Heading_desc from "../Heading_desc";
import EventsSwiper from "./EventsSwiper";

const Event = ({ EventsData, heading, description, delaytime }) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading_desc title={heading} description={description} />
      <EventsSwiper EventsData={EventsData} delaytime={delaytime} />
    </div>
  );
};

export default Event;

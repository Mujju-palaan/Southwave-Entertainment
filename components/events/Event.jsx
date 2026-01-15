import EventsSwiper from "./EventsSwiper"

const Event = ({EventsData, heading, description}) => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-col md:gap-4 gap-2 font-serif text-center md:px-30 px-4 md:py-10 md:mt-4 mt-6">
          <h1 className=" md:text-5xl text-2xl font-semibold ">{heading}</h1>
          <p className="text-stone-500 md:text-2xl text-sm">
            {description}
          </p>
        </div>
        <EventsSwiper EventsData={EventsData} />
      </div>
  )
}

export default Event
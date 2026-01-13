import BlogSwiper from "../components/blog/BlogSwiper";
import OngoingEvents from "../components/events/OngoingEvents";
import Status from "../components/home/Status";

export default function Home() {
  return (
    <div className="">
      <Status />
      <OngoingEvents />

      <div>
        <h1 className="font-serif md:text-5xl text-3xl text-left md:pl-12 px-8"> Blogs</h1>
        <BlogSwiper />
      </div>
    </div>
  );
}

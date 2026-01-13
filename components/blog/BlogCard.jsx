import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const BlogCard = ({ id,img, name, venue, date, description, categories }) => {
  return (
    <Link
      href={`/blogs/${id}`}
      className="m-4 w-full md:w-1/4 flex flex-col gap-2 rounded-xl cursor-pointer
       p-4 shadow-lg transition-shadow duration-300"
    >
      {/* Image wrapper MUST have height */}
      <div className="relative h-45 w-full overflow-hidden rounded-xl">
        <Image
          src={img}
          alt={venue}
          className="object-cover"
          height={250}
          width={300}
        //   unoptimized
        />
      </div>

      <div className="font-semibold text-xs flex gap-2 text-stone-700">
        <span>{name}</span>
        <span className="flex items-center">
          <GoDotFill className="mx-1" />
          {date}
        </span>
      </div>

      <span className="flex justify-between items-center">
        <h2 className="font-semibold">{venue}</h2>
        <MdArrowOutward className="text-2xl" />
      </span>

      <p className="text-xs line-clamp-3">{description}</p>

      <div className="flex flex-wrap gap-2">
        {categories.map((e, idx) => (
          <span
            key={idx}
            className="rounded-lg border border-stone-700 text-stone-700 
                       text-xs px-2 py-0.5"
          >
            {e}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard;

import React from "react";
import Heading_desc from "../../../components/Heading_desc";
import TestimonialCard from "../../../components/testimonail/TestimonialCard";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it.",
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Liam smith",
      title: "Backend Developer",
      quote: "Additional testimonial to fill 4 cards for testing grid layout.",
    },
    {
      id: 5,
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Sophia Lee",
      title: "UX Designer",
      quote: "This is another testimonial example for the slider.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Heading_desc
        title={`Testimonials`}
        description={`Hear from our clients and guests about their unforgettable experiences with Southwave Entertainment.`}
      />
      <div className="flex flex-wrap justify-center items-center">
        {testimonialData.map((t) => (
          <TestimonialCard
            key={t.id}
            id={t.id}
            avatar={t.avatar}
            name={t.name}
            title={t.title}
            quote={t.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

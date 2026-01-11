import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";


const ContactDetails = () => {
  const service = [
    { icon: FaWhatsapp, text: "Live Chat on WhatsApp" },
    { icon: FaTelegramPlane, text: "Shoot us an email" },
    { icon: BsTwitterX, text: "Message us on X" },
  ];
  return (
    <div className="flex flex-col gap-4 w-100">
      <div>
        <h3 className="font-semibold text-2xl">Chat with us</h3>
        <p className="text-stone-500">
          Speak to our friendly team via live chat.
        </p>
        {service.map(({ icon: Icon, text }, idx) => (
          <Link href={`/`} className="flex gap-2 pt-2" key={idx}>
            <span className="text-xl">
              <Icon />
            </span>
            <span className="underline font-semibold">{text}</span>
          </Link>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-2xl">Call us</h3>
        <p className="text-stone-500">Call our team Mon-Fri from 8am to 5pm.</p>
        <Link href={`/`} className="flex gap-2 pt-2">
          <span className="text-xl">
            <FiPhoneCall />
          </span>
          <span className="underline font-semibold">+mobile n.</span>
        </Link>
      </div>

      <div>
        <h3 className="font-semibold text-2xl">Visit us</h3>
        <p className="text-stone-500 ">Chat to us in person at our London HQ.</p>
        <Link href={`/`} className="flex gap-2 pt-2">
          <span className="text-2xl">
            <MdLocationPin />
          </span>
          <span className="underline font-semibold">UK London.</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;

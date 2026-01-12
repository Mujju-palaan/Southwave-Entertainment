import ContactDetails from "../../components/contact/ContactDetails";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <div
      className="md:m-8 mt-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{ backgroundImage: "url('/contact-bgimg.png')" }}
    >
      <div>
        <h1 className="md:text-6xl text-2xl font-bold text-center text-stone-800">
          Contact Our Team
        </h1>

        <div className="text-center text-stone-600 mt-2 sm:text-xl text-[12px] md:p-6 px-8">
          <p>
            Got an question about the product or scaling on our platform? We're
            here to help.
          </p>
          <p>
            Chat to our freindly team 24/7 and get onboard in less than 5
            minutes.
          </p>
        </div>
      </div>
      <div className="items-center justify-self-center md:flex  xs:flex-col gap-8  mt-10">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;

import { Suspense } from "react";
import ServicesClient from "../../../components/services/ServicePage";

const Services = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <div className="bg-[url('/service/southwave-entertainment-service-bannerr-events-london-uk.png')] 
      bg-contain bg-center md:h-90 h-40">
        {/* <!-- Content goes here --> */}
      </div>
      <ServicesClient />
    </Suspense>
  );
};

export default Services;

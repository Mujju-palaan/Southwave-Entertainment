import { Suspense } from "react";
import ServicesClient from "../../../components/services/ServicePage";

const Services = () => {
  

  return (
    <Suspense fallback={null}>
      <ServicesClient />
    </Suspense>
  );
};

export default Services;

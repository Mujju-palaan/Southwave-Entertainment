import { Suspense } from "react";
import ServicesClient from "../../../components/services/ServicePage";

const Services = () => {
  

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <ServicesClient />
    </Suspense>
  );
};

export default Services;

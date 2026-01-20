import PrivacyPolicyPage from "../../../components/policy/policy";
import PolicyBanner from "../../../components/policy/PolicyBanner";
import RefundPolicyData from "../../data/RefundPolicyData";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <PolicyBanner title={`Refund Policy`} date={`Effective 1st Jan 2026`}/>
      <PrivacyPolicyPage PolicyData={RefundPolicyData}/>
    </div>
  );
};

export default RefundPolicy;


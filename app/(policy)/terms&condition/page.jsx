import PrivacyPolicyPage from "../../../components/policy/policy";
import PolicyBanner from "../../../components/policy/PolicyBanner";
import TermsData from "../../data/Terms&ConditionData";

const TermsCondition = () => {
  return (
    <div className="min-h-screen">
      <PolicyBanner title={`Terms & Condition`} date={`Effective 1st Jan 2026`}/>
      <PrivacyPolicyPage PolicyData={TermsData}/>
    </div>
  );
};

export default TermsCondition;


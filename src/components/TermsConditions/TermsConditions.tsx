import { TermsConditionsData } from "./TermsConditionsData";
import InformationPage from "../InformationPage /InformationPage";

const TermsConditions = () => {
    return (
        <InformationPage currentPage='Terms & conditions' title='Terms & conditions' cards={TermsConditionsData}/>
    )
}

export default TermsConditions


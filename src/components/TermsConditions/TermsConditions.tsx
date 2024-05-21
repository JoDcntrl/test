"use client";

import { TermsConditionsData } from "./TermsConditionsData";
import InformationPage from "../InformationPage/InformationPage";

const TermsConditions = () => {
    window.scrollTo(0,0);
    return (
        <InformationPage currentPage='Terms & conditions' title='Terms & conditions' cards={TermsConditionsData}/>
    )
}

export default TermsConditions


"use client";

import { PrivacyPolicyData } from './PrivacyPolicyData'
import InformationPage from '../InformationPage/InformationPage'
import { useEffect } from 'react';


const PrivacyPolicy = () => {

    useEffect(()=> {
        if (typeof window !== "undefined") {
            window.scrollTo(0,0);
          }
    },[])
    
    return (
        <InformationPage currentPage='Privacy Policy' title='Privacy Policy' cards={PrivacyPolicyData}/>
    )
}

export default PrivacyPolicy
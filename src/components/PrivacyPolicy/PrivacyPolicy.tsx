import { PrivacyPolicyData } from './PrivacyPolicyData'
import InformationPage from '../InformationPage /InformationPage'


const PrivacyPolicy = () => {
    return (
        <InformationPage currentPage='Privacy Policy' title='Privacy Policy' cards={PrivacyPolicyData}/>
    )
}

export default PrivacyPolicy
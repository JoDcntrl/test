import Link from 'next/link'
import { PrivacyPolicyData } from './PrivacyPolicyData'

import styles from './privacyPolicy.module.scss'


const PrivacyPolicy = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperBlockLinks}>
                    <Link className={styles.blockLink} href="/">
                        Main
                    </Link>
                    <span className={styles.blockSlash}>/</span>
                    <Link className={styles.blockLinkCurrent} href={""}>
                        Privacy Policy
                    </Link>
                </div>
                <h1 className={styles.mainTitle}>Privacy Policy</h1>
                <div className={styles.vacancies}>
                    {
                        PrivacyPolicyData.map((vacancy) => (
                            <div className= {styles.vacancy}>
                                <h2 className= {styles.vacancyTitle}>{vacancy.title}</h2>
                                <div className= {styles.vacancyText}>
                                    {
                                        vacancy.text.map(text => <p>{text}</p>)
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main> 
    )
}

export default PrivacyPolicy
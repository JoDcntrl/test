"use client";
import Link from 'next/link';
import InformationPageTypes from './InformationPage.types';
import TextForCards from './TextForCards/TextForCards';

import styles from './informationPage.module.scss'


const InformationPage: React.FC<InformationPageTypes> = ({currentPage, title, cards}) => {
    return (
        <main className={styles.main}>
            <div className={styles.mainWrapper}>
                <div className={styles.wrapperBlockLinks}>
                    <Link className={styles.blockLink} href="/">
                        Main
                    </Link>
                    <span className={styles.blockSlash}>/</span>
                    <Link className={styles.blockLinkCurrent} href={""}>
                        {currentPage}
                    </Link>
                </div>
                <h1 className={styles.mainTitle}>{title}</h1>
                <div className={styles.cards}>
                    {
                        cards.map((card) => (
                            <div className= {styles.card}>
                                <h2 className= {styles.cardTitle}>{card.title}</h2>
                                <div className= {styles.cardText}>
                                    {
                                        card.text.map(text => <TextForCards text={text}/>)
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

export default InformationPage
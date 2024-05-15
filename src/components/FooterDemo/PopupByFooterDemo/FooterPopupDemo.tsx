"use client";

import Link from 'next/link';
import Button from '@/components/Button/Button';
import style from './FooterPopupDemo.module.css'
import { FooterPopupDemoTypes } from './FooterPopupDemo.types';


const FooterPopupDemo: React.FC<FooterPopupDemoTypes> = ({closePopup, mouseEnterPopup}) => {

    const URL_SUPPORT_ADDRESS = 'info@decentral.ru';

    const copyEmail = () => {
        navigator.clipboard.writeText(URL_SUPPORT_ADDRESS).then(function() {
            console.log('The text was successfully copied to the clipboard');
          }, function(err) {
            console.error('An error occurred while copying text: ', err);
          });
    }

    return (
        <div 
            className= {style.popup}
            onMouseLeave={closePopup}
            onMouseEnter={() => {
                mouseEnterPopup(true)}}
        >
            <div className= {style.title}>
                <p>Write to us at </p>
                <Link href={`mailto:${URL_SUPPORT_ADDRESS}`} className={style.link}>{URL_SUPPORT_ADDRESS}</Link>
            </div>
            <p className={style.text}>Join the affiliate program and reap the benefits!</p>
            <Button 
                appearance = "secondary" 
                size='m'
                className={style.button}
                onClick={copyEmail}
            >
                Copy the email
            </Button>            
        </div>
    )
}

export default FooterPopupDemo



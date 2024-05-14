"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import { LinksArr, IconsArr } from "@/components/FooterDemo/FooterData";
import { getYear } from "@/helpers/helpers";
import { FooterDemoTypes } from "./Footer.types";
import FooterPopupDemo from "./FooterPopupDemo/FooterPopupDemo";

import { Logo } from "@/assets/svgs/Logo";

import styles from "./footerDemo.module.scss";
import { number } from "yup";

const FooterDemo: React.FC<FooterDemoTypes> = ({ wide = false }) => {
  const [selectedLinkId, setSelectedLinkId] = useState<number | null>(null);

  const closePopup = () => {
    setSelectedLinkId(null);
  }

  useEffect(() => {
    document.addEventListener('click', closePopup);

    return () => {
      document.removeEventListener('click', closePopup);
    }
  }, []);

  return (
  <footer className={styles.footerDemoMain}>
    <div className={cn(styles.footerDemo, { [styles.wide]: wide })}>
      <div className={styles.footerDemoLogoContainer}>
        <Logo />
        <span className={styles.logoText}>decentral job</span>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.footerList}>
          {LinksArr.map(({ text, id, href }) => (
            <Link 
              key={id} 
              href={href} 
              className={styles.footerListLink} 
              scroll = {false}
              onMouseEnter={() => setSelectedLinkId(id === 5 ? id : null)}
            > 
              {text}
              {selectedLinkId === id  && <FooterPopupDemo closePopup={closePopup}/>}          
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footerIcons}>
        {IconsArr.map(({ icon, id, href }) => (
          <Link key={id} className={styles.footerListLink} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
    <div className={styles.footerDemoBottom}>
      <span className={styles.footerBottom}>© Decentral Job</span>
      <span className={styles.footerBottom}>{getYear()}</span>
    </div>
  </footer>
);
}

export default FooterDemo;




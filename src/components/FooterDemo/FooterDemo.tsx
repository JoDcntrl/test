import React from "react";
import Link from "next/link";
import cn from "classnames";

import { LinksArr, IconsArr } from "@/components/FooterDemo/FooterData";
import { getYear } from "@/helpers/helpers";
import { FooterDemoTypes } from "./Footer.types";

import { Logo } from "@/assets/svgs/Logo";

import styles from "./footerDemo.module.scss";

const FooterDemo: React.FC<FooterDemoTypes> = ({ wide = false }) => (
  <footer className={styles.footerDemoMain}>
    <div className={cn(styles.footerDemo, { [styles.wide]: wide })}>
      <div className={styles.footerDemoLogoContainer}>
        <Logo />
        <span className={styles.logoText}>decentral job</span>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.footerList}>
          {LinksArr.map(({ text, id, href }) => (
            <Link key={id} className={styles.footerListLink} href={href}>
              {text}
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

export default FooterDemo;

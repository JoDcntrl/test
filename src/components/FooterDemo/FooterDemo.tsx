import React from "react";

import Link from "next/link";

import { FooterDemoTypes } from "./Footer.types";
import { LinksArr, IconsArr } from '@/components/FooterDemo/FooterData'
import { getYear } from '@/helpers/helpers'

import { Logo } from "@/assets/svgs/Logo";

import styles from '@/components/FooterDemo/footerDemo.module.scss';

const FooterDemo: React.FC<FooterDemoTypes> = () => (
	<footer className={styles.footerDemoMain}>
		<div className={styles.footerDemo}>
			<div className={styles.footerDemoLogoContainer}>
				<Logo />
				<span className={styles.logoText}>decentral job</span>
			</div>
			<div className={styles.footerMenu} >
				<div className={styles.footerList}>
					{LinksArr.map(({ text, id }) =>
						<Link key={id} className={styles.footerListLink} href={""}>{text}</Link>)}
				</div>
			</div>
			<div className={styles.footerIcons}>
				{IconsArr.map(({ icon, id }) =>
					<Link key={id} className={styles.footerListLink} href={""} >{icon}</Link>)}
			</div>
		</div>
		<div className={styles.footerDemoBottom}>
			<span className={styles.footerBottom}>© Decentral job</span>
			<span className={styles.footerBottom}>{getYear()}</span>
		</div>
	</footer>
);

export default FooterDemo;

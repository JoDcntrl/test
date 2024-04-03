import React from "react";
import cn from 'classnames';
import Image from "next/image";

import {CompanyPromoTypes} from "@/components/CompanyPromo/CompanyPromo.types";

import styles from './CompanyPromo.module.scss';

const CompanyPromo: React.FC<CompanyPromoTypes> = ({logo, className}) => (
	<div className={cn(className, styles.cardContainer)}>
		<Image src={logo} alt='company image'/>
	</div>
)

export default React.memo(CompanyPromo)

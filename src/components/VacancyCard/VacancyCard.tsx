import React from 'react';
import cn from 'classnames';
import Image from "next/image";

import {convertISOToDate, priceRu, yearDeclensionEn} from "@/helpers/helpers";
import {VacancyCardTypes} from "@/components/VacancyCard/VacancyCard.types";

import styles from './VacancyCard.module.scss';

const VacancyCard: React.FC<VacancyCardTypes> = ({name, experience, mode, city, description, salary, company, logo, date, className, ...props}) => (
	<div className={cn(className, styles.cardContainer)} {...props}>
		<div className={styles.cardHeader}>
			<h3 className={styles.vacancyTitle}>{name}</h3>
			<p className={styles.vacancySalary}>From {priceRu(salary)}</p>
		</div>
		<div className={styles.vacancyInfo}>
			<p className={styles.vacancyInfoText}>Experience from ${yearDeclensionEn(experience)}</p>
			<div className={styles.circle} />
			<p className={styles.vacancyInfoText}>{mode}</p>
			<div className={styles.circle} />
			<p className={styles.vacancyInfoText}>{city}</p>
		</div>
		<p className={styles.vacancyDescription}>{description}</p>
		<div className={styles.vacancyCardFooter}>
			<div className={styles.vacancyCardContainerLogo}>
				<Image src={logo} alt='company logo' className={styles.vacancyCompanyLogo} width='24' height='24' />
				<p className={styles.vacancyCardLogoText}>{company}</p>
			</div>
			<p className={styles.vacancyCardDate}>{convertISOToDate(date)}</p>
		</div>
	</div>
)

export default React.memo(VacancyCard);

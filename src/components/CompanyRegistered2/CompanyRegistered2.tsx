import React from "react";

import VacancyCard from "@/components/VacancyCard/VacancyCard";
import { cards } from './CompanyRegisteredDate2'
import Button from "@/components/Button/Button";
import CompanyCard from "../CompanyCard/CompanyCard";

import styles from './companyRegistered2.module.scss'

const JobsScreen: React.FC = () => (
	<section className={styles.section}>
		<div className={styles.sectionWrapper} >
			<div className={styles.sectionTitle} >
				<h1 className={styles.sectionTitleText}>Find the right position</h1>
				<Button children={<span className={styles.buttonText}>All jobs</span>}
					appearance={'primary'}
					size='l' className={styles.sectionTitleButton} />
			</div>
			<div className={styles.sectionCards} >
				{cards.map(({ id, logo, title, description, city, vacancyNumber }) =>
					<CompanyCard key={id} logo={logo} title={title} description={description} city={city} vacancyNumber={vacancyNumber} />)}
			</div>
		</div>
	</section>
)

export default JobsScreen;

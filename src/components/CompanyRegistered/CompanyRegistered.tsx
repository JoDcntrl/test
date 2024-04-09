import React from "react";

import './companyRegistered.scss'
import VacancyCard from "../VacancyCard/VacancyCard";
import { cards } from './CompanyRegisteredDate'
import Button from "../Button/Button";

const JobsScreen: React.FC = () => (
	<section className='section'>
		<div className="sectionWrapper">
			<div className="sectionTitle">
				<h1 className="sectionTitleText">Find the right position</h1>
				<Button children={<span className="buttonText">All jobs</span>}
					appearance={'primary'}
					size='s' className={'sectionTitleButton'} />
			</div>
			<div className="sectionCards">
				{cards.map(({ name, experience, mode, city, description, salary, company, logo, date }) => <VacancyCard name={name} experience={experience} mode={mode} city={city} description={description} salary={salary} company={company} logo={logo} date={date} />)}
			</div>
		</div>
	</section>
)

export default JobsScreen;

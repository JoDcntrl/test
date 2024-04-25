"use client";
import React from "react";

import Input from "@/components/Input/Input";
import FiltersJobs from "@/components/FiltersJobs/FilterJobs";
import { cards } from "./JobsData";
import VacancyCard from "@/components/VacancyCard/VacancyCard";

import { Vector } from "@/assets/svgs/Vector";

import styles from "./jobs.module.scss";

const Companies = () => (
  <main className={styles.main}>
    <div className={styles.mainWrapper}>
      <h1 className={styles.mainTitle}>Jobs</h1>
      <section className={styles.mainSection}>
        <div className={styles.sectionBlock}>
          <Input
            isIcon={true}
            className={styles.inputContainer}
            placeholder="Search..."
            name="search"
          />

          <div className={styles.blockTotalSort}>
            <span className={styles.blockTotal}>Total vacancies: 250</span>
            <span className={styles.blockSort}>
              By date of posting
              <button className={styles.blockSortVector}>
                <Vector />
              </button>
            </span>
          </div>
          <div className={styles.blockCards}>
            {cards.map(
              ({
                id,
                name,
                experience,
                mode,
                city,
                description,
                salary,
                company,
                logo,
                date,
              }) => (
                <VacancyCard
                  key={id}
                  name={name}
                  experience={experience}
                  mode={mode}
                  city={city}
                  description={description}
                  salary={salary}
                  company={company}
                  logo={logo}
                  date={date}
                />
              )
            )}
          </div>
        </div>
        <FiltersJobs />
      </section>
    </div>
  </main>
);

export default Companies;

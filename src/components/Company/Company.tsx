"use client";
import React from "react";

import { cards } from "./CompanyData";

import { Vector } from "@/assets/svgs/Vector";

import styles from "./company.module.scss";
import VacancyCard from "../VacancyCard/VacancyCard";
import CompanyAside from "../CompanyAside/CompanyAside";

const Company = () => (
  <main className={styles.main}>
    <div className={styles.mainWrapper}>
      <section className={styles.mainSection}>
        <h1 className={styles.mainTitle}>Companies</h1>
        <div className={styles.sectionBlock}>
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
      </section>
      <CompanyAside />
    </div>
  </main>
);

export default Company;

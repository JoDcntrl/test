import React from "react";

import Input from "@/components/Input/Input";
import CompanyCard from "@/components/CompanyCard/CompanyCard";
import FiltersCompanies from "@/components/FiltersCompanies/FiltersCompanies";
import { cards } from "./CompaniesData";

import { Vector } from "@/assets/svgs/Vector";

import styles from "./companies.module.scss";

const Companies = () => (
  <main className={styles.main}>
    <div className={styles.mainWrapper}>
      <h1 className={styles.mainTitle}>Companies</h1>
      <section className={styles.mainSection}>
        <div className={styles.sectionBlock}>
          <Input
            isIcon={true}
            className={styles.inputContainer}
            placeholder="Search..."
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
              ({ id, logo, title, description, city, vacancyNumber }) => (
                <CompanyCard
                  key={id}
                  logo={logo}
                  title={title}
                  description={description}
                  city={city}
                  vacancyNumber={vacancyNumber}
                />
              )
            )}
          </div>
        </div>
        <FiltersCompanies />
      </section>
    </div>
  </main>
);

export default Companies;

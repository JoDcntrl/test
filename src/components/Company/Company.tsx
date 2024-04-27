"use client";
import React from "react";
import Link from "next/link";

import { activeJobs, dataCompany } from "./CompanyData";
import VacancyCard from "@/components/VacancyCard/VacancyCard";
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo";

import { Vector } from "@/assets/svgs/Vector";

import styles from "./company.module.scss";

const Company = () => (
  <div className={styles.canvas}>
    <div className={styles.canvasWrapper}>
      <div className={styles.wrapperBlockLinks}>
        <Link className={styles.blockLink} href="/">
          Main
        </Link>
        <span className={styles.blockSlash}>/</span>
        <Link className={styles.blockLink} href="/companies">
          Companies
        </Link>
        <span className={styles.blockSlash}>/</span>
        <Link className={styles.blockLinkCurrent} href={""}>
          {dataCompany.name}
        </Link>
      </div>
      <div className={styles.wrapperBlockMain}>
        <main>
          <h1 className={styles.mainTitle}>Active jobs</h1>
          <div className={styles.mainBlock}>
            <div className={styles.blockTotalSort}>
              <span className={styles.blockTotal}>Total vacancies: 5</span>
              <span className={styles.blockSort}>
                By date of posting
                <button className={styles.blockSortVector}>
                  <Vector />
                </button>
              </span>
            </div>
            <div className={styles.blockCards}>
              {activeJobs.map(
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
        </main>
        <aside>
          <CompanyInfo dataCompany={dataCompany} />
        </aside>
      </div>
    </div>
  </div>
);

export default Company;

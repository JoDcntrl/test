"use client";

import React from "react";
import Link from "next/link";

import { activeJobs } from "./CompanyData";
import VacancyCard from "@/components/VacancyCard/VacancyCard";
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo";
import { cards } from "@/components/Companies/CompaniesData";
import { CompanyTypes } from "./Company.types";

import { Vector } from "@/assets/svgs/Vector";

import styles from "./company.module.scss";

const Company: React.FC<CompanyTypes> = ({ companyId }) => {
  const dataCompany = cards.find((comp) => comp.id === Number(companyId));
  const dataVacancies = activeJobs.slice(0, dataCompany?.vacancyNumber);

  return (
    <>
      {dataCompany ? (
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
                {dataCompany.title}
              </Link>
            </div>
            <div className={styles.wrapperBlockMain}>
              <main>
                <h1 className={styles.mainTitle}>Active jobs</h1>
                <div className={styles.mainBlock}>
                  <div className={styles.blockTotalSort}>
                    <span className={styles.blockTotal}>
                      Total vacancies: {dataVacancies.length}
                    </span>
                    <span className={styles.blockSort}>
                      By date of posting
                      <button className={styles.blockSortVector}>
                        <Vector />
                      </button>
                    </span>
                  </div>
                  <div className={styles.blockCards}>
                    {dataVacancies.map(
                      ({
                        id,
                        name,
                        experience,
                        mode,
                        city,
                        description,
                        salary,
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
                          company={dataCompany.title}
                          logo={dataCompany.logo}
                          date={date}
                        />
                      )
                    )}
                  </div>
                </div>
              </main>
              <aside>{<CompanyInfo dataCompany={dataCompany} />}</aside>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.canvas}>
          <div className={styles.canvasWrapper}>No company data available</div>
        </div>
      )}
    </>
  );
};

export default Company;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import VacancyCard from "@/components/VacancyCard/VacancyCard";
import { cardsVacancies } from "./RegisteredVacanciesDate";
import Button from "@/components/Button/Button";

import styles from "./registeredVacancies.module.scss";

const RegisteredVacancies: React.FC = () => {
  const router = useRouter();

  const handleClickJobsButton = () => router.push("/vacancies");

  const handleClickCompany = (idCompany: number, idVacancy: number) =>
    router.push(`/companies/company/${idCompany}/vacancy/${idVacancy}`);

  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionTitle}>
          <h3 className={styles.sectionTitleText}>Find the right position</h3>
          <Button
            appearance="primary"
            size="l"
            className={styles.sectionTitleButton}
            onClick={() => handleClickJobsButton()}
          >
            All jobs
          </Button>
        </div>
        <div className={styles.sectionCards}>
          {cardsVacancies.map(
            ({
              idCompany,
              idVacancy,
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
                onClick={() => handleClickCompany(idCompany, idVacancy)}
                key={idVacancy}
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
  );
};

export default RegisteredVacancies;

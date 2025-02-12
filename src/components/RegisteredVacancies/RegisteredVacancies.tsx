import React from "react";

import VacancyCard from "@/components/VacancyCard/VacancyCard";
import { cards } from "./RegisteredVacanciesDate";
import Button from "@/components/Button/Button";

import styles from "./registeredVacancies.module.scss";

const RegisteredVacancies: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionTitle}>
        <h3 className={styles.sectionTitleText}>Find the right position</h3>
        <Button
          appearance="primary"
          size="l"
          className={styles.sectionTitleButton}
        >
          All jobs
        </Button>
      </div>
      <div className={styles.sectionCards}>
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
);

export default RegisteredVacancies;

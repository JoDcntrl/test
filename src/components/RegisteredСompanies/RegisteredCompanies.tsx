import React from "react";

import Button from "@/components/Button/Button";
import { cards } from "./RegisteredСompaniesData";
import CompanyCard from "@/components/CompanyCard/CompanyCard";

import styles from "./registeredСompanies.module.scss";

const RegisteredCompanies: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.sectionTitleText}>Company registered</h1>
        <Button
          appearance="primary"
          size="l"
          className={styles.sectionTitleButton}
        >
          All companies
        </Button>
      </div>
      <div className={styles.sectionCards}>
        {cards.map(({ id, logo, title, description, city, vacancyNumber }) => (
          <CompanyCard
            key={id}
            logo={logo}
            title={title}
            description={description}
            city={city}
            vacancyNumber={vacancyNumber}
          />
        ))}
      </div>
    </div>
  </section>
);

export default RegisteredCompanies;

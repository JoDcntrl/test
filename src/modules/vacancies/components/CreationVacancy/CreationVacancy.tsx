import Link from "next/link";

import { VacancyForm } from "@/modules/vacancies/components/vacancyForm/VacancyForm";

import styles from "./styles.module.scss";

export const CreationVacancy = () => (
  <div className={styles.creation}>
    <div className={styles.creationWrapper}>
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
          Stellar
        </Link>
      </div>
      <div className={styles.breadCrumbsWrapper}></div>
      <h1 className={styles.title}>Job creation</h1>
      <VacancyForm />
    </div>
  </div>
);

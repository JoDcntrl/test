import { VacancyForm } from "../vacancyForm";
import styles from "./styles.module.scss";

export const CreationVacancy = () => (
  <div className={styles.creation}>
    <div className={styles.creationWrapper}>
      <div className={styles.breadCrumbsWrapper}></div>
      <h1 className={styles.title}>Job creation</h1>
      <VacancyForm />
    </div>
  </div>
);

import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import Jobs from "@/components/Jobs/Jobs";

import styles from "@/app/page.module.css";
import { CreationVacancy } from "@/modules/vacancies/components/CreationVacancy";

const PageVacancie = () => (
  <main className={styles.main}>
    <LayoutHeader>
      <CreationVacancy />
    </LayoutHeader>
  </main>
);

export default PageVacancie;

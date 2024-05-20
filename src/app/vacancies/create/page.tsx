import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import { CreationVacancy } from "@/modules/vacancies/components/CreationVacancy";

import styles from "@/app/page.module.css";

const PageVacancie = () => (
  <main className={styles.main}>
    <LayoutHeader>
      <CreationVacancy />
    </LayoutHeader>
  </main>
);

export default PageVacancie;

import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import Jobs from "@/components/Jobs/Jobs";

import styles from "@/app/page.module.css";

const PageVacancies = () => (
  <main className={styles.main}>
    <LayoutHeader>
      <Jobs />
    </LayoutHeader>
  </main>
);

export default PageVacancies;

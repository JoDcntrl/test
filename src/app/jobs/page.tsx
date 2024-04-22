import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import Jobs from "@/components/Jobs/Jobs";

import styles from "@/app/page.module.css";

export default function PageJobs() {
  return (
    <main className={styles.main}>
      <LayoutHeader>
        <Jobs />
      </LayoutHeader>
    </main>
  );
}

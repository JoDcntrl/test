import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import Companies from "@/components/Companies/Companies";

import styles from "@/app/page.module.css";

const PageCompanies = () => (
  <main className={styles.main}>
    <LayoutHeader>
      <Companies />
    </LayoutHeader>
  </main>
);

export default PageCompanies;

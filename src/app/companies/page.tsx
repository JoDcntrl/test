import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";
import Companies from "@/components/Companies/Companies";

import styles from "@/app/page.module.css";

export default function PageCompanies() {
  return (
    <main className={styles.main}>
      <LayoutHeader>
        <Companies />
      </LayoutHeader>
    </main>
  );
}

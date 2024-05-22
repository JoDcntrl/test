import Layout from "@/components/Layout/Layout";
import { CreationVacancy } from "@/modules/vacancies/components/CreationVacancy";

import styles from "@/app/page.module.css";

const PageVacancie = () => (
  <main className={styles.main}>
    <Layout wide={true}>
      <CreationVacancy />
    </Layout>
  </main>
);

export default PageVacancie;

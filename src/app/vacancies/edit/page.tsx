import { EditVacancy } from "@/modules/vacancies/components/EditVacancy";
import Layout from "@/components/Layout/Layout";

import styles from "@/app/page.module.css";

const PageVacancyEdit = () => (
  <main className={styles.main}>
    <Layout wide={true}>
      <EditVacancy />
    </Layout>
  </main>
);

export default PageVacancyEdit;

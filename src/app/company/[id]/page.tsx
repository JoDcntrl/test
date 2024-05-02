import Company from "@/components/Company/Company";
import Layout from "@/components/Layout/Layout";

import styles from "@/app/page.module.css";

const PageCompany = () => (
  <main className={styles.main}>
    <Layout>
      <Company />
    </Layout>
  </main>
);

export default PageCompany;

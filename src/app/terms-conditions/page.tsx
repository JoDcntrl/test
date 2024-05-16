import TermsConditions from "@/components/TermsConditions/TermsConditions";
import Layout from "@/components/Layout/Layout";

import styles from "@/app/page.module.css";

const PageTermsConditions = () => (
    <main className={styles.main}>
      <Layout>
        <TermsConditions />
      </Layout>
    </main>
  );
  
  export default PageTermsConditions;
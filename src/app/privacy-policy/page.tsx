import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Layout from "@/components/Layout/Layout";

import styles from "@/app/page.module.css";

const PagePrivacyPolicy = () => (
    <main className={styles.main}>
      <Layout>
        <PrivacyPolicy />
      </Layout>
    </main>
  );
  
  export default PagePrivacyPolicy;
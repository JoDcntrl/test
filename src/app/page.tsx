import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/Banner/Banner";
import RegisteredVacancies from "@/components/RegisteredVacancies/RegisteredVacancies";
import StoreProvider from "./StoreProvider";
import RegisteredCompanies from "@/components/RegisteredСompanies/RegisteredCompanies";

import styles from "./page.module.css";

const Home = () => (
  <StoreProvider>
    <main className={styles.main}>
      <Layout>
        <MainScreen />
        <RegisteredVacancies />
        <Banner />
        <RegisteredCompanies />
      </Layout>
    </main>
  </StoreProvider>
);

export default Home;

'use client'
import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/Banner/Banner";
import RegisteredVacancies from "@/components/RegisteredVacancies/RegisteredVacancies";
import RegisteredCompanies from "@/components/RegisteredСompanies/RegisteredCompanies";

import styles from "./page.module.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const Home = () => (
  <TonConnectUIProvider manifestUrl="https://jodcntrl.github.io/manifest-test/tonconnect-manifest.json">
    <main className={styles.main}>
      <Layout>
        <MainScreen />
        <RegisteredVacancies />
        <Banner />
        <RegisteredCompanies />
      </Layout>
    </main>
  </TonConnectUIProvider>

);

export default Home;

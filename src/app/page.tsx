import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/Banner/Banner";
import RegisteredVacancies from '@/components/RegisteredVacancies/RegisteredVacancies'
import RegisteredCompanies from "@/components/RegisteredСompanies/RegisteredCompanies";

import styles from "./page.module.css";


export default function Home() {
	return (
		<main className={styles.main}>
			<Layout>
				<MainScreen />
				<RegisteredVacancies />
				<Banner />
				<RegisteredCompanies />
			</Layout>
		</main>
	);
}

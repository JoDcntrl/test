import styles from "./page.module.css";
import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";
import CompanyRegistered from "@/components/CompanyRegistered/CompanyRegistered";

export default function Home() {
	return (
		<main className={styles.main}>
			<Layout>
				<MainScreen />
				<CompanyRegistered />
			</Layout>
		</main>
	);
}

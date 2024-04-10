import styles from "./page.module.css";
import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";
import CompanyRegistered from "@/components/CompanyRegistered/CompanyRegistered";
import Banner from "@/components/Banner/Banner";
import CompanyRegistered2 from "@/components/CompanyRegistered2/CompanyRegistered2";

export default function Home() {
	return (
		<main className={styles.main}>
			<Layout>
				<MainScreen />
				<CompanyRegistered />
				<Banner />
				<CompanyRegistered2 />
			</Layout>
		</main>
	);
}

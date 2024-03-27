import styles from "./page.module.css";
import MainScreen from "@/components/MainScreen/MainScreen";
import Layout from "@/components/Layout/Layout";

export default function Home() {
	return (
		<main className={styles.main}>
			<Layout>
				<MainScreen/>
			</Layout>
		</main>
	);
}

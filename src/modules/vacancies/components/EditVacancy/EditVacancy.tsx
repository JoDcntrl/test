"use client";

import Link from "next/link";

import { VacancyForm } from "@/modules/vacancies/components/VacancyForm";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export const EditVacancy = () => {
  const [defaultDataForm, setDefaultDataForm] = useState<string | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("defaultDataForm");
    if (data) {
      setDefaultDataForm(data);
    }
  }, []);

  return (
    <div className={styles.creation}>
      <div className={styles.creationWrapper}>
        <div className={styles.wrapperBlockLinks}>
          <Link className={styles.blockLink} href="/">
            Main
          </Link>
          <span className={styles.blockSlash}>/</span>
          <Link className={styles.blockLink} href="/companies">
            Companies
          </Link>
          <span className={styles.blockSlash}>/</span>
          <Link className={styles.blockLinkCurrent} href={""}>
            Stellar
          </Link>
        </div>
        <h1 className={styles.title}>Job editing</h1>
        <VacancyForm defaultDataForm={defaultDataForm} />
      </div>
    </div>
  );
};

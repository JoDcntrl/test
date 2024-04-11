import React from "react";
import Image from "next/image";

import Button from "@/components/Button/Button";

import PhoneImg from "@/assets/images/phone.png";

import styles from "./banner.module.scss";

const Banner: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.sectionWrapper}>
      <div className={styles.leftBlock}>
        <h1 className={styles.leftBlockTitle}>
          Subscribe to our bot to the latest vacancies
        </h1>
        <Button
          appearance="secondary"
          size="l"
          className={styles.sectionTitleButton}
        >
          Subscribe
        </Button>
      </div>
      <div className={styles.rightBlock}>
        <Image
          className={styles.rightBlockImg}
          src={PhoneImg}
          alt="Phone"
          width="354"
          height="285"
        />
      </div>
    </div>
  </section>
);

export default Banner;

"use client";

import { useState, useEffect } from "react";
import cn from "classnames";

import Link from "@/components/Link/Link";
import { LinksArr } from "./HeaderData";
import { HeaderDemoTypes } from "@/components/HeaderDemo/Header.types";

import { Logo } from "@/assets/svgs/Logo";
import { Burger } from "@/assets/svgs/Burger";
import { Cross } from "@/assets/svgs/Cross";

import styles from "./headerDemo.module.scss";

const HeaderDemo: React.FC<HeaderDemoTypes> = ({ className, ...props }) => {
  const [activeBurger, setActiveBurger] = useState(false);

  const toggleBurger = () => {
    setActiveBurger((prev) => !prev);
  };

  useEffect(() => {
    const changeBodyPosition = () => {
      if (activeBurger) {
        document.querySelector("body")?.style.setProperty("position", "fixed");
      } else
        document
          .querySelector("body")
          ?.style.setProperty("position", "relative");
    };
    changeBodyPosition();
  }, [activeBurger]);

  return (
    <header className={cn(className, styles.headerDemoMain)} {...props}>
      <div className={styles.headerDemoLogoContainer}>
        <Logo />
        <span className={styles.logoText}>decentral job</span>
      </div>
      <div className={cn(styles.headerDemo, { [styles.active]: activeBurger })}>
        <div className={styles.headerLinks}>
          {LinksArr.map(({ id, text, withCount, disabled, count }) => (
            <Link
              key={id}
              count={count}
              withCount={withCount}
              disabled={disabled}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className="">
          <button className={styles.headerButtonConnectWallet} disabled>
            Connect wallet
          </button>
        </div>
      </div>
      {activeBurger ? (
        <div onClick={toggleBurger} className={styles.headerDemoCross}>
          <Cross />
        </div>
      ) : (
        <div className={styles.headerDemoBurger} onClick={toggleBurger}>
          <Burger />
        </div>
      )}
    </header>
  );
};

export default HeaderDemo;

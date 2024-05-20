import React from "react";
import Image from "next/image";
import cn from "classnames";

import { pluralizationEn } from "@/helpers/helpers";
import Button from "@/components/Button/Button";

import { CardOptionTypes } from "./CardOptionTypes";

import Ton from "@/assets/svgs/Ton.svg";

import styles from "./cardOption.module.scss";

const CardOption = <T extends Record<string, any>>({
  value,
  title,
  description,
  numberVacancies,
  price,
  buttonSale = false,
  watch,
  register,
  nameGroup,
}: CardOptionTypes<T>) => {
  const option = watch(nameGroup);
  return (
    <label
      className={cn(styles.card, {
        [styles.cardSelected]: option === value,
      })}
    >
      <input
        {...register(nameGroup)}
        type="radio"
        value={value}
        className={styles.cardInputHidden}
      />
      <div className={styles.cardQuantityJobs}>
        {pluralizationEn("job", numberVacancies)}
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardText}>{description}</div>
      <div className={styles.cardPrice}>
        {price} <Image src={Ton} alt="Ton" />
      </div>
      <div className={styles.cardPriceDiscount}>
        <span>or 25% off DCJ</span>
        {buttonSale && (
          <Button appearance={"secondary"} size={"s"} className={styles.button}>
            <span className={styles.buttonText}>Sale 25%</span>
          </Button>
        )}
      </div>
    </label>
  );
};

export default CardOption;

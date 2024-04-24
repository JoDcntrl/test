import React from "react";
import cn from "classnames";

import { Chevron } from "@/assets/svgs/Chevron";

import { ButtonChevronTypes } from "./ButtonChevron.types";

import styles from "./buttonChevron.module.scss";

const ButtonChevron = ({
  openBlock,
  setOpenBlock,
}: ButtonChevronTypes): JSX.Element => (
  <button
    type="button"
    onClick={() => setOpenBlock((prev) => !prev)}
    className={cn(styles.buttonsTagToggle, {
      [styles.buttonsTagToggleActive]: openBlock,
    })}
  >
    <Chevron />
  </button>
);

export default ButtonChevron;

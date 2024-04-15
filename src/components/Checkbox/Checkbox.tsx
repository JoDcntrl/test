import React from "react";
import cn from "classnames";

import { CheckboxTypes } from "./Checkbox.types";

import styles from "./checkbox.module.scss";

const Checkbox: React.FC<CheckboxTypes> = ({
  nameSection,
  disabled = false,
}) => (
  <label
    className={cn(styles.checkbox, {
      [styles.disabled]: disabled,
    })}
  >
    <input type="checkbox" disabled={disabled} />
    <div
      className={cn(styles.checkbox__checkmark, {
        [styles.disabled]: disabled,
      })}
    ></div>
    <div className={styles.checkbox__body}>{nameSection}</div>
  </label>
);

export default Checkbox;

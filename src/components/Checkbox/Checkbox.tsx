import React from "react";
import cn from "classnames";

import { CheckboxTypes } from "./Checkbox.types";

import styles from "./checkbox.module.scss";

const Checkbox: React.FC<CheckboxTypes> = ({ disabled = false }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      className={cn(styles.checkbox, {
        [styles.disabled]: disabled,
      })}
    >
      <input
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={cn(styles.checkbox__checkmark, {
          [styles.disabled]: disabled,
        })}
      ></div>
    </div>
  );
};

export default Checkbox;

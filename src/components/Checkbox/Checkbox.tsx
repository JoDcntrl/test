import React from "react";
import cn from "classnames";

import { CheckboxTypes } from "./Checkbox.types";

import styles from "./checkbox.module.scss";

const Checkbox = <T extends Record<string, any>>({
  name,
  nameGroup,
  register,
  disabled = false,
  required = false,
  active = false,
}: CheckboxTypes<T>) => {
  return (
    <div
      className={cn(styles.checkbox, {
        [styles.disabled]: disabled,
      })}
    >
      <input
        {...register(nameGroup, { required: required })}
        disabled={disabled}
        type="checkbox"
        value={name}
        defaultChecked={active}
      />
      <div
        className={cn(styles.checkboxCheckmark, {
          [styles.disabled]: disabled,
        })}
      ></div>
    </div>
  );
};

export default Checkbox;

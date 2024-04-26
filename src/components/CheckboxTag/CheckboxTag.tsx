import React from "react";

import { CheckboxTagTypes } from "./CheckboxTag.types";

import styles from "./checkboxTag.module.scss";

const CheckboxTag = <T extends Record<string, any>>({
  disabled = false,
  name,
  nameGroup,
  required = false,
  active = false,
  register,
}: CheckboxTagTypes<T>) => (
  <label className={styles.checkboxTagBtn}>
    <input
      {...register(nameGroup, { required: required })}
      disabled={disabled}
      type="checkbox"
      value={name}
      defaultChecked={active}
    />
    <span>{name}</span>
  </label>
);

export default CheckboxTag;

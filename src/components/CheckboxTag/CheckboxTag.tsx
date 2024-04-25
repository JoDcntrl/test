import React from "react";
import { useFormContext } from "react-hook-form";

import { CheckboxTagTypes } from "./CheckboxTag.types";

import styles from "./checkboxTag.module.scss";

const CheckboxTag: React.FC<CheckboxTagTypes> = ({
  disabled = false,
  name,
  nameGroup,
  required = false,
  register,
}) => {
  return (
    <label className={styles.checkboxTagBtn}>
      <input
        {...register(nameGroup, { required: required })}
        disabled={disabled}
        type="checkbox"
        value={name}
      />
      <span>{name}</span>
    </label>
  );
};

export default CheckboxTag;

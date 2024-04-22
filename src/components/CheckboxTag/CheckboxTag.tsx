import React from "react";
import { useFormContext } from "react-hook-form";

import { CheckboxTagTypes } from "./CheckboxTag.types";

import "./checkboxTag.scss";

const CheckboxTag: React.FC<CheckboxTagTypes> = ({
  disabled = false,
  name,
  nameGroup,
  required = false,
}) => {
  const { register } = useFormContext();

  return (
    <label className="checkboxTag-btn">
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

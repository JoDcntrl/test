"use client";

import React, { useId } from "react";
import ReactSelect from "react-select";

import { SelectTypes } from "./Select.types";

import "./select.scss";

const Select: React.FC<SelectTypes> = ({
  onChange,
  objValue,
  data,
  placeholder,
}) => {
  const getValue = (obj: { value: string }) =>
    obj ? data?.find((option) => option.value === obj.value) : "";

  return (
    <ReactSelect
      placeholder={placeholder}
      classNamePrefix="react-select"
      instanceId={useId()}
      options={data}
      value={getValue(objValue as { value: string })}
      onChange={(newValue) => onChange((newValue as { value: string }).value)}
    />
  );
};

export default Select;

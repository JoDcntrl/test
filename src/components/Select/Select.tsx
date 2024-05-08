"use client";

import React, { useId } from "react";
import ReactSelect from "react-select";

import DropdownIndicator from "./DropdownIndicator";
import IconOption from "./IconOption";
import { SelectTypes } from "./Select.types";

import { stylesSelect } from "./StylesSelect";

const Select: React.FC<SelectTypes> = ({
  onChange,
  objValue,
  data,
  placeholder,
  height = "48px",
  color = "#666666",
}) => {
  const getValue = (obj: { value: string }) =>
    obj ? data?.find((option) => option.value === obj.value) : "";

  return (
    <ReactSelect
      placeholder={placeholder}
      styles={stylesSelect(height, color)}
      instanceId={useId()}
      options={data}
      components={{ Option: IconOption, DropdownIndicator }}
      value={getValue(objValue as { value: string })}
      onChange={(newValue) => onChange((newValue as { value: string }).value)}
    />
  );
};

export default Select;

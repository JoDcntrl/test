"use client";

import React, { useId } from "react";
import ReactSelect, {
  GroupBase,
  MenuListProps,
  components,
} from "react-select";

import { ChevronBlue } from "@/assets/svgs/ChevronBlue";

import { SelectTypes } from "./Select.types";

import "./select.scss";

const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    {props.data.label}
    <img src="./Icon.svg" style={{ width: 36 }} alt={props.data.label} />
  </Option>
);

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
      styles={{
        container: (styles) => ({
          ...styles,
        }),
        control: (styles) => ({
          ...styles,
          height: "48px",
          border: "1px solid #E6E6E6",
          borderRadius: "12px",
          boxSizing: "border-box",
        }),
        valueContainer: (styles) => ({
          ...styles,
          padding: "0",
        }),
        input: (styles) => ({
          ...styles,
          margin: "0",
          padding: "0px",
          paddingLeft: "16px",
        }),
        singleValue: (styles) => ({
          ...styles,
          margin: "0",
          padding: "0px",
          paddingLeft: "16px",
          color: "#666666",
        }),
        placeholder: (styles) => ({
          ...styles,
          display: "flex",
          alignItems: "center",
          margin: "0",
          paddingLeft: "16px",
        }),
        indicatorsContainer: (styles, state) => ({
          ...styles,
          transform: !state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
          transition: "250ms",
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          display: "none",
        }),
        menu: (styles) => ({
          ...styles,
          maxHeight: "240px;",
          borderRadius: "8px",
          marginTop: "4px",
          boxShadow: "0px 8px 12px 0px rgba(234, 234, 234, 0.8)",
        }),

        menuList: (styles) => ({
          ...styles,
          maxHeight: "240px",
          padding: "0",
          borderRadius: "8px",
        }),
        option: (styles, state) => ({
          ...styles,
          padding: "10px 14px",
          color: "#666666",
          backgroundColor: state.isSelected ? "rgba(219, 222, 240, 0.16)" : "",
        }),
      }}
      instanceId={useId()}
      options={data}
      value={getValue(objValue as { value: string })}
      onChange={(newValue) => onChange((newValue as { value: string }).value)}
      components={{ Option: IconOption }}
    />
  );
};

export default Select;

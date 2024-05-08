import { StylesConfig } from "react-select";
import { VARIANT } from "./Select.types";

export const stylesSelect = (variant: string): StylesConfig => {
  return {
    container: (styles) => ({
      ...styles,
      height: "39px",
    }),
    control: (styles) => ({
      ...styles,
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
      height: variant === VARIANT.BIG ? "56px" : "inherit",
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
      color: "#666666",
    }),
    indicatorsContainer: (styles, state) => ({
      ...styles,
      transform: !state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
      transition: "250ms",
      marginRight: "16px",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: "0",
      transform: "rotate(180deg)",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    menu: (styles) => ({
      ...styles,
      top: "none",
      marginTop: "4px",
      borderRadius: "8px",
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
      backgroundColor:
        state.isSelected || state.isFocused ? "rgba(219, 222, 240, 0.16)" : "",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),
  };
};

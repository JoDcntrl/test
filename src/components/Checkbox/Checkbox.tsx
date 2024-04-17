import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

import { CheckboxTypes } from "./Checkbox.types";

import styles from "./checkbox.module.scss";

const Checkbox: React.FC<CheckboxTypes> = ({
  active = false,
  disabled = false,
  name,
  nameGroup,
  required = false,
}) => {
  const [checked, setChecked] = React.useState(false);
  const { register } = useFormContext();

  React.useEffect(() => {
    if (active === true) {
      setChecked(active);
    }
  }, []);

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

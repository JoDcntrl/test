import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

import { CheckboxTypes } from "./Checkbox.types";

import styles from "./checkbox.module.scss";

const Checkbox: React.FC<CheckboxTypes> = ({
  name,
  nameGroup,
  data,
  disabled = false,
  required = false,
}) => {
  const { register, setValue } = useFormContext();

  React.useEffect(() => {
    function setActiveItems() {
      const arrayActives: string[] = [];
      data?.forEach((item: { active: any; nameSection: string }) => {
        if (item.active) {
          arrayActives.push(item.nameSection);
        }
      });
      if (arrayActives.length > 0) {
        setValue(nameGroup, arrayActives);
      }
    }
    setActiveItems();
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

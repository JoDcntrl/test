import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

import { RadioTypes } from "./Radio.types";

import styles from "./radio.module.scss";

const Radio: React.FC<RadioTypes> = ({ data, required = false }) => {
  const findedActive = data.find((item) => item.active)?.nameSection;
  const [value, setValue] = React.useState(findedActive);
  const { register } = useFormContext();

  return (
    <>
      {data?.map(({ id, nameSection, disabled }) => (
        <div key={id}>
          <label className={styles.checkboxesListItem}>
            <div
              className={cn(styles.checkbox, {
                [styles.disabled]: disabled,
              })}
            >
              <input
                {...register("companySize", { required: required })}
                type="radio"
                disabled={disabled}
                value={nameSection}
                checked={value === nameSection ? true : false}
                onChange={(event) => setValue(event.target.value)}
              />
              <div
                className={cn(styles.checkbox__checkmark, {
                  [styles.disabled]: disabled,
                })}
              ></div>
            </div>
            <div className={styles.checkbox__body}>{nameSection}</div>
          </label>
        </div>
      ))}
    </>
  );
};

export default Radio;

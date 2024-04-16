import React from "react";
import cn from "classnames";

import { CheckboxTypes } from "./Radio.types";

import styles from "./radio.module.scss";

const Checkbox: React.FC<CheckboxTypes> = ({ disabled = false, data, activeValue }) => {
  const [value, setValue] = React.useState(activeValue);
  return (
    <>
      {data?.map(({ id, nameSection }) => <div key={id}>
        <label className={styles.checkboxesListItem}>
          <div
            className={cn(styles.checkbox, {
              [styles.disabled]: disabled,
            })}
          >
            <input
              type="radio"
              disabled={disabled}
              name='CompanySize'
              value={nameSection}
              checked={value == nameSection ? true : false}
              onChange={(event) => setValue(event.target.value)} />
            <div
              className={cn(styles.checkbox__checkmark, {
                [styles.disabled]: disabled,
              })}
            ></div>
          </div>
          <div className={styles.checkbox__body}>{nameSection}</div>
        </label></div>)}
    </>
  );
};

export default Checkbox;

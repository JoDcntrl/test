import React from "react";

import { CheckboxTypes } from "./CheckboxesBlock.types";

import styles from "./checkboxesBlock.module.scss";

const CheckboxesBlock: React.FC<CheckboxTypes> = ({ data, title }) => (
  <div className={styles.blockCheckboxes}>
    <h2 className={styles.blockCheckboxesTitle}>{title}</h2>
    <div className={styles.blockCheckboxesList}>
      {data?.map(({ nameSection, id }) => (
        <label key={id} className={styles.checkbox}>
          <input type="checkbox" />
          <div className={styles.checkbox__checkmark}></div>
          <div className={styles.checkbox__body}>{nameSection}</div>
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxesBlock;

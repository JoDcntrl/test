import React, { useEffect } from "react";
import cn from "classnames";

import { RadioTypes } from "./Radio.types";

import styles from "./radio.module.scss";

const Radio = <T extends Record<string, any>>({
  nameGroup,
  data,
  register,
  required = false,
}: RadioTypes<T>) => (
  <>
    {data?.map(({ id, nameSection, disabled, active }) => (
      <div key={id}>
        <label className={styles.radiosListItem}>
          <div
            className={cn(styles.radio, {
              [styles.disabled]: disabled,
            })}
          >
            <input
              {...register(nameGroup, { required: required })}
              type="radio"
              disabled={disabled}
              value={nameSection}
              defaultChecked={active}
            />
            <div
              className={cn(styles.radioCheckmark, {
                [styles.disabled]: disabled,
              })}
            ></div>
          </div>
          <div className={styles.radioBody}>{nameSection}</div>
        </label>
      </div>
    ))}
  </>
);

export default Radio;

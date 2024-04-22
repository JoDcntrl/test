import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

import { RadioTypes } from "./Radio.types";

import styles from "./radio.module.scss";

const Radio: React.FC<RadioTypes> = ({ nameGroup, data, required = false }) => {
  const { register, setValue } = useFormContext();

  React.useEffect(() => {
    function setActiveItems() {
      const findedActive = data.find(({ active }) => active);
      if (findedActive?.active) {
        setValue(nameGroup, findedActive?.nameSection);
      }
    }
    setActiveItems();
  }, []);

  return (
    <>
      {data?.map(({ id, nameSection, disabled }) => (
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
              />
              <div
                className={cn(styles.radio__checkmark, {
                  [styles.disabled]: disabled,
                })}
              ></div>
            </div>
            <div className={styles.radio__body}>{nameSection}</div>
          </label>
        </div>
      ))}
    </>
  );
};

export default Radio;

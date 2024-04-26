import React, { useState } from "react";
import cn from "classnames";

import CheckboxTag from "@/components/CheckboxTag/CheckboxTag";
import ButtonChevron from "@/components/ButtonChevron/ButtonChevron";
import { BlockCheckboxesTagTypes } from "./BlockCheckboxesTag.types";

import styles from "./blockCheckboxesTag.module.scss";

const BlockCheckboxesTag = <T extends Record<string, any>>({
  data,
  nameGroup,
  register,
}: BlockCheckboxesTagTypes<T>) => {
  const [openBlock, setOpenBlock] = useState(false);

  return (
    <div className={styles.buttonsTagWrapper}>
      <label className={styles.buttonsTagLabel}>
        {nameGroup}
        <ButtonChevron openBlock={openBlock} setOpenBlock={setOpenBlock} />
      </label>
      <div
        className={cn(styles.blockButtonsTag, {
          [styles.blockButtonsTagActive]: openBlock === true,
        })}
      >
        {data?.map(({ nameSection, id, disabled, active }) => (
          <CheckboxTag<T>
            register={register}
            key={id}
            disabled={disabled}
            name={nameSection}
            nameGroup={nameGroup}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockCheckboxesTag;

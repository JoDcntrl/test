import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
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

  const { setValue } = useForm();

  useEffect(() => {
    const setActiveItems = () => {
      const arrayActives: string[] = [];
      data.forEach((item) => {
        if (item.active) {
          arrayActives.push(item.nameSection);
        }
      });
      setValue(nameGroup, arrayActives);
    };
    setActiveItems();
  }, []);

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
        {data?.map(({ nameSection, id, disabled }) => (
          <CheckboxTag
            register={register}
            key={id}
            disabled={disabled}
            name={nameSection}
            nameGroup={nameGroup}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockCheckboxesTag;

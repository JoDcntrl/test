import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

import CheckboxTag from "@/components/CheckboxTag/CheckboxTag";

import { Chevron } from "@/assets/svgs/Chevron";

import { BlockCheckboxesTagTypes } from "./BlockCheckboxesTag.types";

import styles from "./blockCheckboxesTag.module.scss";

const BlockCheckboxesTag: React.FC<BlockCheckboxesTagTypes> = ({
  data,
  nameGroup,
}) => {
  const [openBlock, setOpenBlock] = useState(false);

  const { setValue } = useFormContext();

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
        <button
          type="button"
          onClick={() => setOpenBlock((prev) => !prev)}
          className={cn(styles.buttonsTagToggle, {
            [styles.buttonsTagToggleActive]: openBlock === true,
          })}
        >
          <Chevron />
        </button>
      </label>
      <div
        className={cn(styles.blockButtonsTag, {
          [styles.blockButtonsTagActive]: openBlock === true,
        })}
      >
        {data?.map(({ nameSection, id, disabled }) => (
          <CheckboxTag
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

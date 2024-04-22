import React from "react";
import cn from "classnames";

import CheckboxTag from "../CheckboxTag/CheckboxTag";
import { BlockCheckboxesTagTypes } from "./BlockCheckboxesTag.types";

import { Chevron } from "@/assets/svgs/Chevron";

import "./blockCheckboxesTag.scss";
import { useFormContext } from "react-hook-form";

const BlockCheckboxesTag: React.FC<BlockCheckboxesTagTypes> = ({
  data,
  nameGroup,
}) => {
  const [openBlock, setOpenBlock] = React.useState(false);

  const { setValue } = useFormContext();

  React.useEffect(() => {
    function setActiveItems() {
      const arrayActives: string[] = [];
      data.forEach((item) => {
        if (item.active) {
          arrayActives.push(item.nameSection);
        }
      });
      setValue(nameGroup, arrayActives);
    }
    setActiveItems();
  }, []);

  return (
    <div className="buttonsTagWrapper">
      <label className="buttonsTagLabel">
        {nameGroup}
        <button
          type="button"
          onClick={() => setOpenBlock((prev) => !prev)}
          className={cn("buttonsTagToggle ", {
            ["buttonsTagToggle buttonsTagToggleActive"]: openBlock === true,
          })}
        >
          <Chevron />
        </button>
      </label>
      <div
        className={cn("blockButtonsTag ", {
          ["blockButtonsTag blockButtonsTagActive"]: openBlock === true,
        })}
      >
        {data?.map(({ nameSection, id, disabled, active }) => (
          <CheckboxTag
            key={id}
            disabled={disabled}
            name={nameSection}
            nameGroup={nameGroup}
            required={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockCheckboxesTag;

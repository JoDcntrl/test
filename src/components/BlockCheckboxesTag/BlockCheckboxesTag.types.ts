import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface BlockCheckboxesTagTypes<T extends FieldValues>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: {
    id: number;
    nameSection: string;
    disabled: boolean;
    active: boolean;
  }[];
  nameGroup: string;
  register: UseFormRegister<T>;
}

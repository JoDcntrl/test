import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface BlockCheckboxesTagTypes<T extends FieldValues>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: {
    id: number;
    nameSection: string;
    disabled: boolean;
    active: boolean;
  }[];
  nameGroup: Path<T>;
  register: UseFormRegister<T>;
}

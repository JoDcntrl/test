import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface CheckboxTypes<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  nameGroup: Path<T>;
  data: {
    id: number;
    nameSection: string;
    active: boolean;
    disabled: boolean;
  }[];
  disabled?: boolean;
  active?: boolean;
  required?: boolean;
  register: UseFormRegister<T>;
}

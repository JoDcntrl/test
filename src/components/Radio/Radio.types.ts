import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface RadioTypes<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  nameGroup: Path<T>;
  data: {
    id: number;
    nameSection: string;
    disabled: boolean;
    active: boolean;
  }[];
  required?: boolean;
  register: UseFormRegister<T>;
}

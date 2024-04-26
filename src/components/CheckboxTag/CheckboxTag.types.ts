import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface CheckboxTagTypes<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  nameGroup: Path<T>;
  disabled?: boolean;
  required?: boolean;
  active?: boolean;
  register: UseFormRegister<T>;
}

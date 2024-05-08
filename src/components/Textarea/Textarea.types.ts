import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextareaTypes<T extends FieldValues> {
  name: Path<T>;
  placeholder?: string;
  rows?: number;
  register: UseFormRegister<T>;
}

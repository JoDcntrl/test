import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export interface TextareaTypes<T extends FieldValues> {
  name: Path<T>;
  placeholder?: string;
  rows?: number;
  error?: FieldError;
  register: UseFormRegister<T>;
}

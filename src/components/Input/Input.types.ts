import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FilterCompaniesForm } from "../FiltersCompanies/FilterCompaniesForm.types";

export interface InputTypes<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  isIcon?: boolean;
  name: Path<T>;
  required?: boolean;
  register: UseFormRegister<T>;
}

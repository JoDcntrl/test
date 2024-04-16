import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  isIcon?: boolean;
  name: string
}

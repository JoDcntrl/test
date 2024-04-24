import { InputHTMLAttributes } from "react";

export interface CheckboxTagTypes
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  nameGroup: string;
  disabled?: boolean;
  required?: boolean;
}

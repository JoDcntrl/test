import { InputHTMLAttributes } from "react";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  active?: boolean;
  name: string;
  nameGroup: string;
  required?: boolean;
}

import { InputHTMLAttributes } from "react";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  nameGroup: string;
  data: {
    id: number;
    nameSection: string;
    active: boolean;
    disabled: boolean;
  }[];
  disabled?: boolean;
  active?: boolean;
  required?: boolean;
}

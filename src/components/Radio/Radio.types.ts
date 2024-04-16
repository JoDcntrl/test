import { InputHTMLAttributes } from "react";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  nameSection?: string;
  disabled?: boolean;
  active?: boolean;
  data: { id: number, nameSection: string }[]
  activeValue?: string

}

import { InputHTMLAttributes } from "react";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  nameSection?: string;
  appearance?: string;
}

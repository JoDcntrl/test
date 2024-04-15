import { InputHTMLAttributes } from "react";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  section?: string;
  data?: {
    id: number;
    nameSection: string;
  }[];
}

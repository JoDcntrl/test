import { InputHTMLAttributes } from "react";

export interface RadioTypes extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  data: {
    id: number;
    nameSection: string;
    disabled?: boolean;
    active?: boolean;
  }[];
}

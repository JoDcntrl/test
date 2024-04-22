import { InputHTMLAttributes } from "react";

export interface RadioTypes extends InputHTMLAttributes<HTMLInputElement> {
  nameGroup: string;
  data: {
    id: number;
    nameSection: string;
    disabled: boolean;
    active: boolean;
  }[];
  required?: boolean;
}

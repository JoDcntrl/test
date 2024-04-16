import { InputHTMLAttributes } from "react";
import { RefCallBack, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  nameSection?: string;
  disabled?: boolean;
  active?: boolean;
}

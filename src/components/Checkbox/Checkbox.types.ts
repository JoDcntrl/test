import { InputHTMLAttributes } from "react";
import { RefCallBack, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxTypes extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  active?: boolean;
  name?: string,
  nameGroup: string
}

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonChevronTypes
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  openBlock: boolean;
  setOpenBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SelectTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objValue: { value: string } | string | undefined | null;
  onChange: (...event: any[]) => void;
  data?: {
    value: string;
    label: string;
  }[];
  placeholder: string;
}

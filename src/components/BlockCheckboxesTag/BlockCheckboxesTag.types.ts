import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BlockCheckboxesTagTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: {
    id: number;
    nameSection: string;
    disabled: boolean;
    active: boolean;
  }[];
  nameGroup: string;
}

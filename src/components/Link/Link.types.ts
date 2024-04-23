import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LinkTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  withCount: boolean;
  disabled: boolean;
  link?: string;
  count: number | null;
  children: ReactNode;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterPopupDemoTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  closePopup: () => void;
}
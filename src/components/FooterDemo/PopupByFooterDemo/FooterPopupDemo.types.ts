import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface FooterPopupDemoTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  closePopup: () => void;
  mouseEnterPopup: Dispatch<SetStateAction<boolean>>;
}
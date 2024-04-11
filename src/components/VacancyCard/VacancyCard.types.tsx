import { DetailedHTMLProps, HTMLAttributes } from "react";
import { StaticImageData } from "next/image";

export interface VacancyCardTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  experience: number;
  mode: string;
  city: string;
  description: string;
  salary: number;
  company: string;
  logo: StaticImageData | string;
  date: string;
  className?: string;
}

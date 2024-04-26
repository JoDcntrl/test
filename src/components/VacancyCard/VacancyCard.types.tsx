import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface VacancyCardTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  experience: number;
  mode: string;
  city: string;
  description: string;
  salary: number;
  company: string;
  logo: string;
  date: string;
  className?: string;
}

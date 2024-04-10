import { DetailedHTMLProps, HTMLAttributes } from "react";
import { StaticImageData } from "next/image";

export interface CompanyCardTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	logo: StaticImageData | string
	title: string
	description: string
	city: string
	vacancyNumber: number | string
}

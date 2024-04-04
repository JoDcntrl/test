import {DetailedHTMLProps, HTMLAttributes} from "react";
import {StaticImageData} from "next/image";

export interface CompanyPromoTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	logo: StaticImageData | string
	className: string
}

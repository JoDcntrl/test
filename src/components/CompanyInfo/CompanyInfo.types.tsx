import { ReactElement } from "react";

export interface CompanyInfoTypes {
  dataCompany: {
    title: string;
    logo: string;
    nameLink: string;
    link: string;
    city: string;
    industry: string;
    sizeCompany: string;
    description: string;
    linksContact: {
      id: number;
      icon: ReactElement;
    }[];
  };
}

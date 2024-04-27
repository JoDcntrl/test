import { ReactElement } from "react";

export interface CompanyInfoTypes {
  dataCompany: {
    logo: string;
    name: string;
    nameLink: string;
    link: string;
    city: string;
    industry: string;
    sizeCompany: string;
    about: string;
    linksContact: {
      id: number;
      icon: ReactElement;
    }[];
  };
}

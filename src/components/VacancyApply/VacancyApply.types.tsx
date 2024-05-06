export interface VacancyApplyTypes {
  dataCompany?: {
    id: number;
    logo: string;
    title: string;
    nameLink: string;
    link: string;
    description: string;
    city: string;
    vacancyNumber: number;
    sizeCompany: string;
    industry: string;
    linksContact: {
      id: number;
      icon: React.JSX.Element;
    }[];
  };
  idCompany: string | null;
}

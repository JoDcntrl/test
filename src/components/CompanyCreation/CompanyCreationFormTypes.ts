export interface CompanyCreationFormTypes {
  city?: string;
  linkLogo?: string | null;
  industry?: string;
  size?: string;
  companyDescription: string;
  companyName: string;
  webSite: string;
  telegram: string;
  [key: string]: string | null | undefined;
}

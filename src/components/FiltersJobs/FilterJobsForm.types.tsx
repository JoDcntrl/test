export interface FilterJobsForm {
  design?: string[] | null;
  development?: string[] | null;
  technical?: string[] | null;
  other?: string[] | null;
  qualification?: string[] | null;
  experience?: string;
  type?: string | null;
  city: string;
  remote?: boolean;
  company?: string | null;
}

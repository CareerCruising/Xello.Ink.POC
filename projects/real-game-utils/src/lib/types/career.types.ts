export type Career = {
  careerId: number;
  careerName: string;
  jobDescription: string;
  briefIntroduction?: string;
  isActive: boolean;
  salary: number[];
  grossSalary: number[];
  monthlyGrossSalary?: number[];
  monthlyNetSalary?: number;
  cardImage: string;
  workHoursPerWeek: number;
  vacationWeeksPerYear: number;
  profileImage: string;
  employerName: string;
  employerAddress: string;
  pathways?: {
    id: number;
    tag: number | null;
  }[];
  credentials?: CareerCredentials[];
};

export type CareerCredentials = {
  id: number;
  tag: number | null;
  schools: number[];
  yearsMin?: number;
  yearsMax?: number;
};

export type CareerProfile = {
  pathways: { id: number; tag: number | null }[];
  credentials: { id: number; tag: number | null; schools: number[] }[];
  careerId: number;
};

export type CareerSalaries = {
  createdDateUTC: string;
  locationId: number;
  careerIncome: {
    careerId: number;
    grossSalary: number;
  }[];
};

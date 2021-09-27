export interface RequestCompany {
  page: number;
  limit: number;
  ethnicities?: [];
  gender?: string;
  q?: string;
  industry?: [];
  totalAnnualContributors?: string;
  location?: string;
  revenueMin?: number;
  revenueMax?: number;
}

export enum AuthRoute {
  reset = '/reset',
  login = 'login',
  reg = 'reg',
  change_password = 'change_password',
}

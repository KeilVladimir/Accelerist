export default interface RequestCompany {
  page: number;
  limit: number;
  ethnicities?: Array<string>;
  income?: Array<string>;
  ageRanges?: Array<string>;
  gender?: string;
  q?: string;
  scope?: string;
  industry?: [];
  totalAnnualContributors?: string;
  location?: string[];
  revenueMin?: number;
  revenueMax?: number;
  revenue?: number[];
  sdgGoals?: Array<string>;
  deleteIds?: Array<string>;
  affinities?: Array<string>;
  csrFocusIds?: Array<number>;
}

export enum AuthRoute {
  reset = '/reset',
  login = 'login',
  reg = 'reg',
  change_password = 'change_password',
}

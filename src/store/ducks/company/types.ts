export const enum ActionTypes {
  GET_FAVORITE_COMPANY = 'GET_FAVORITE_COMPANY',
  GET_FAVORITE_COMPANY_REQUEST = 'GET_FAVORITE_COMPANY_REQUEST',
  SET_COMPANY = 'SET_COMPANY',
  GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST',
  DISLIKE = 'DISLIKE',
  LOADER = 'LOADER',
  ERROR = 'ERROR',
}

export interface Company {
  id: string;
  name: string;
  phone: string;
  website: string;
  city: string;
  street: string;
  state: string;
  country: string;
  continent: null;
  revenueRange: string;
  employeeRange: string;
  socialMediaUrls: null;
  primaryIndustry: string[];
  industries: null;
  revenue: string;
  employeeCount: number;
  parentId: string;
  parentName: null;
  sdgGoals: [];
  genders: null;
  income: null;
  age: null;
  charitablePartners: [];
  statusZoomInfo: string;
  employeeEngagementOpportunities: true;
  similarCompanies: string[];
  favoriteCompanies: favorite[];
  score: 50;
  like: true;
}

interface favorite {
  id: string;
  companyId: string;
  userId: string;
}

interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}

export interface AllCompany {
  items: Company[];
  meta?: Meta;
  loader: boolean;
  error: string;
}

export interface Data<T> {
  data: T;
}

export interface PaginatedData<T> extends Data<T[]> {
  links: Links;
  meta: Meta;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Links {
  first: string;
  last: string;
  prev: string;
  next: string;
}

export interface BankData {
  name: string;
  email: string;
  slogan: string;
  country: string;
  city: string;
  total_atms: number;
  total_managers: number;
}

export interface BranchData {
  id: number;
  name: string;
  city: string;
  town: string;
  total_managers: number;
  total_atms: number;
  created_at: string;
  updated_at: string;
}

export interface ATMData {
  id: number;
  name: string;
  status: number;
  city: string;
  branch: string;
  coordinate: Coordinate;
  created_at: Date;
  updated_at: Date;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface ManagerData {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  branchData: {
    name: string;
    city: string;
    town: string;
  };
}

export interface PlanData {
  id: string;
  amount: number;
  billing_scheme: string;
  currency: string;
  interval: string;
  interval_count: string;
  nickname: string;
  metadata: {
    desc: string;
  };
}

export interface AuthResponse {
  user: BankData;
  access_token: string;
  token: string;
  expires_in: number;
}

export interface APIResponse {
  success: boolean;
  errorMessage: string;
  errorCode: number;
}

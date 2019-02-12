export interface PaginatedData<T> extends Data<T[]> {
  links: Links;
  meta: Meta;
}

export interface Data<T> {
  data: T;
}

export interface AuthResponse {
  access_token: string;
  token: string;
  expires_in: number;
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

export interface ATMData {
  id: number;
  name: string;
  status: number;
  city: string;
  coordinate: Coordinate;
  created_at: Date;
  updated_at: Date;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface ATMQuery {
  id?: string;
  name?: string;
}

export interface ManagerData {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

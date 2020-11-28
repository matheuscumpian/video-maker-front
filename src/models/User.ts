import { TypeStatus } from './index';

export interface AuthParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  name: string;
  password: string;
}

export interface RegisterState extends RegisterParams {
  error: string;
  status: TypeStatus;
}

export interface User {
  name?: string;
  email?: string;
  _id?: string;
}

export interface UserState {
  user: User;
  authenticated: boolean;
  status: TypeStatus;
  error: string;
}

import { TypeStatus } from './index'

export interface User {
  name?: string
  email?: string
  password?: string
  passwordConfirm?: string
}

export interface AuthParams {
  email: string
  password: string
}

export interface UserState {
  user: User
  status: TypeStatus
  error: string
}

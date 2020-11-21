import { AuthParams, RegisterParams, User } from '../models/User'
import jwt from 'jsonwebtoken'
import axios from './index'
import { AxiosResponse } from 'axios'

interface AuthResponse extends Response {
  // eslint-disable-next-line camelcase
  access_token: string
}

const parseJwt = (token: string | null): any => {
  try {
    return token && jwt.decode(token.trim())
  } catch (e) {
    return {
      name: '',
      email: ''
    }
  }
}

export class AuthService {
  static getUser(): User {
    const token = parseJwt(localStorage.getItem('access_token'))

    return {
      name: token?.name,
      email: token?.email
    }
  }

  static post({
    email,
    password
  }: AuthParams): Promise<AxiosResponse<AuthResponse>> {
    return axios.post('/auth', {
      email,
      password
    })
  }

  static registerUser({
    name,
    email,
    password
  }: RegisterParams): Promise<AxiosResponse> {
    return axios.post('/user', {
      name,
      email,
      password
    })
  }

  static logout(): void {
    localStorage.clear()
  }
}

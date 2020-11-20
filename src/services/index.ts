import Axios from 'axios'
import { toast } from 'react-toastify'
const UNAUTHORIZED = 401
const INTERNAL_SERVER_ERROR = 500

export interface Response {
  status: string
}

const axios = Axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000
})

axios.interceptors.request.use(config => {
  const headers = {
    ...config.headers,
    'Accept-Language': 'en',
    'access-token': `${localStorage.getItem('access_token')}`
  }

  return {
    ...config,
    headers
  }
})

axios.interceptors.response.use(
  response => response,
  async err => {
    const { status } = err.response

    if (status === UNAUTHORIZED) {
      toast.error('🔐 Unauthorized', {
        autoClose: 5000,
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        onClose: () => (window.location.href = `${process.env.DOMAIN}/login`)
      })
    }

    if (status === INTERNAL_SERVER_ERROR) {
      toast.error('😭 An error has occurred on server', {
        autoClose: 5000,
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        onClose: () => (window.location.href = `${process.env.DOMAIN}/login`)
      })
    }

    return Promise.reject(err.response)
  }
)

export default axios

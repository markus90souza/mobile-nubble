import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.5gsczrrY4mOaG1vOSO4AWGDFygROUMup2mJfEvyF6uVeNWnKVcbm8mQQnjMm',
  },
})

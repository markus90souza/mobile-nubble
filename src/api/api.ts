import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mw.DUAxPlPR_l1TsU18seJmc8uEYqwKmjOPfkKFuK22gFXWEes8Sgat9hyngpJ_',
  },
})

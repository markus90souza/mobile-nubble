import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer NA.fBQTJQy0G2Rol6_PHxZ_ivekoH-bLFeq-k58udROjON1DBeHgW2W1WIyIesY',
  },
})

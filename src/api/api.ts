import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.nqoueMhI7MqzCTylDO3o9WWEoHXgg8cmpR6P_MZXtEQtmkg79m8cYPl12D7j',
  },
})

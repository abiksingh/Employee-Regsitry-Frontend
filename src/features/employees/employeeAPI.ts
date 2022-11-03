import axios from 'axios'
import { ILogin, IRegister } from '../../interfaces/Employee'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const domain = `http://localhost:3001/api/employee`

export const registerEmployee = (payload: IRegister) => {
  return axios.post(`${domain}/register`, payload)
}

export const loginEmployee = (payload: ILogin) => {
  return axios.post(`${domain}/login`, payload)
}

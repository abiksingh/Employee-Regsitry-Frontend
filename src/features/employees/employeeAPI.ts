import axios from 'axios'
import { IRegister } from '../../interfaces/Employee'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

const domain = `http://localhost:3001/api/employee`

export const registerEmployee = (payload: IRegister) => {
  return axios.post(`${domain}/register`, payload)
}

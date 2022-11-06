import axios from 'axios'
import { ILogin, IRegister } from '../../interfaces/Employee'

export const domain = `http://localhost:3001/api/employee`

export const registerEmployee = (payload: IRegister) => {
  return axios.post(`${domain}/register`, payload)
}

export const loginEmployee = async (payload: ILogin) => {
  const { data } = await axios.post(`${domain}/login`, payload)
  localStorage.setItem('employeeInfo', JSON.stringify(data.token))
  return data
}

export const getEmployees = () => {
  const token = localStorage.getItem('employeeInfo')
  if (!token) {
    return
  }
  return axios.get(`${domain}/home`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
}

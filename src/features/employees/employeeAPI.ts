import axios from 'axios'
import { IEmployee, ILogin, IRegister } from '../../interfaces/Employee'

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

export const addEmployee = (payload: IEmployee) => {
  const token = localStorage.getItem('employeeInfo')
  if (!token) {
    return
  }

  return axios.post(`${domain}/home`, payload, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
}

export const editEmployee = (id: string | undefined, payload: IEmployee) => {
  const token = localStorage.getItem('employeeInfo')
  if (!token) {
    return
  }

  return axios.put(`${domain}/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
}

export const deleteEmployee = (id: string) => {
  const token = localStorage.getItem('employeeInfo')
  if (!token) {
    return
  }

  return axios.delete(`${domain}/${id}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
}

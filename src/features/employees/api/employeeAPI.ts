import { IEmployee, ILogin, IRegister } from '../../../interfaces/Employee'
import { axios_instance } from '../../../utils/axios'

export const domain = `http://localhost:3001/api/employee`

export const registerEmployee = (payload: IRegister) => {
  return axios_instance.post(`${domain}/register`, payload)
}

export const loginEmployee = (payload: ILogin) => {
  return axios_instance.post(`${domain}/login`, payload)
}

export const getEmployees = () => {
  return axios_instance.get(`${domain}/home`)
}

export const getEmployeeById = (id: string) => {
  return axios_instance.get(`${domain}/${id}`)
}

export const addEmployee = (payload: IEmployee) => {
  return axios_instance.post(`${domain}/home`, payload)
}

export const editEmployee = (id: string | undefined, payload: IEmployee) => {
  return axios_instance.put(`${domain}/${id}`, payload)
}

export const deleteEmployee = (id: string) => {
  return axios_instance.delete(`${domain}/${id}`)
}

export const addComments = (id: string, comment: string) => {
  return axios_instance.post(`${domain}/employee-details/${id}`, { comment })
}

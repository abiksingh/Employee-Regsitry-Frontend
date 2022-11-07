import axios from 'axios'

const token = localStorage.getItem('employeeInfo')

export const axios_instance = axios.create({
  baseURL: 'http://localhost:3001/api/employee',
  timeout: 1000,
  headers: { Authorization: `Bearer ${JSON.parse(`${token}`)}` }
})

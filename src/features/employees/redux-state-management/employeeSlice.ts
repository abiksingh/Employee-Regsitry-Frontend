import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as EmployeeAPI from '../api/employeeAPI'
import { IEmployee, IEmployeeSliceState, ILogin, IRegister } from '../../../interfaces/Employee'
import { notification } from 'antd'

const initialState: IEmployeeSliceState = {
  register: {
    name: '',
    email: '',
    password: ''
  },
  errors: [],
  loading: false,
  login: {
    email: '',
    password: '',
    token: ''
  },
  employees: [],
  employee: {} as IEmployee
}

export const registerEmployee = createAsyncThunk('employee/registerEmployee', async (payload: IRegister) => {
  return EmployeeAPI.registerEmployee(payload)
})

export const loginEmployee = createAsyncThunk('employee/loginEmployee', async (payload: ILogin) => {
  return EmployeeAPI.loginEmployee(payload)
})

export const getEmployees = createAsyncThunk('employee/getEmployee', async () => {
  return EmployeeAPI.getEmployees()
})

export const getEmployeeById = createAsyncThunk('employee/getEmployeeById', async (payload: string) => {
  return EmployeeAPI.getEmployeeById(payload)
})

export const addEmployees = createAsyncThunk('employee/addEmployee', async (payload: IEmployee) => {
  return EmployeeAPI.addEmployee(payload)
})

export const editEmployees = createAsyncThunk('employee/editEmployee', async (payload: IEmployee) => {
  return EmployeeAPI.editEmployee(payload._id, payload)
})

export const deleteEmployees = createAsyncThunk('employee/deleteEmployee', async (payload: string) => {
  return EmployeeAPI.deleteEmployee(payload)
})

export const addComments = createAsyncThunk('employee/addComments', async (payload: any) => {
  return EmployeeAPI.addComments(payload.id, payload.comment)
})

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // register
      .addCase(registerEmployee.pending, (state) => {
        state.loading = true
      })
      .addCase(registerEmployee.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.register = action.payload
        notification.open({
          message: 'Employee Registered'
        })
      })
      .addCase(registerEmployee.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      //login
      .addCase(loginEmployee.pending, (state) => {
        state.loading = true
      })
      .addCase(loginEmployee.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.login = action.payload
        localStorage.setItem('employeeInfo', JSON.stringify(action.payload.data.token))
        notification.open({
          message: 'Logged In'
        })
      })
      .addCase(loginEmployee.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      // Get Employees
      .addCase(getEmployees.pending, (state) => {
        state.loading = true
      })
      .addCase(getEmployees.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.employees = action.payload.data
      })
      .addCase(getEmployees.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      // Get Employees By Id
      .addCase(getEmployeeById.pending, (state) => {
        state.loading = true
      })
      .addCase(getEmployeeById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.employee = action.payload.data
      })
      .addCase(getEmployeeById.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      //add Employee
      .addCase(addEmployees.pending, (state) => {
        state.loading = true
      })
      .addCase(addEmployees.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.employees = [...state.employees, action.payload.data]
      })
      .addCase(addEmployees.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      //edit Employee
      .addCase(editEmployees.pending, (state) => {
        state.loading = true
      })
      .addCase(editEmployees.fulfilled, (state, action: any) => {
        state.loading = false
        state.employees = state.employees.map((employee) => (employee._id === action.meta.arg._id ? action.payload.data : employee))
      })
      .addCase(editEmployees.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      //delete Employee
      .addCase(deleteEmployees.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteEmployees.fulfilled, (state, action: any) => {
        state.loading = false
        state.employees = state.employees.filter((employee) => employee._id !== action.meta.arg)
      })
      .addCase(deleteEmployees.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })

      //add Comments
      .addCase(addComments.pending, (state) => {
        state.loading = true
      })
      .addCase(addComments.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.employee.comment = [...state.employee.comment, action.payload.data]
      })
      .addCase(addComments.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })
  }
})

export const {} = employeeSlice.actions

export default employeeSlice.reducer

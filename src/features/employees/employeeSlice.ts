import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as EmployeeAPI from './employeeAPI'
import { IEmployeeSliceState, ILogin, IRegister } from '../../interfaces/Employee'

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
    password: ''
  }
}

export const registerEmployee = createAsyncThunk('employee/registerEmployee', async (payload: IRegister) => {
  return EmployeeAPI.registerEmployee(payload)
})

export const loginEmployee = createAsyncThunk('employee/loginEmployee', async (payload: ILogin) => {
  return EmployeeAPI.loginEmployee(payload)
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
      })
      .addCase(loginEmployee.rejected, (state, action: any) => {
        state.loading = false
        state.errors = action.payload
      })
  }
})

export const {} = employeeSlice.actions

export default employeeSlice.reducer

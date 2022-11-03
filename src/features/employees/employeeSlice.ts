import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as EmployeeAPI from './employeeAPI'
import { IEmployeeSliceState, IRegister } from '../../interfaces/Employee'

const initialState: IEmployeeSliceState = {
  register: {
    name: '',
    email: '',
    password: ''
  },
  errors: [],
  loading: false
}

export const registerEmployee = createAsyncThunk('employee/registerEmployee', async (payload: IRegister) => {
  return EmployeeAPI.registerEmployee(payload)
})

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
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
  }
})

export const {} = employeeSlice.actions

export default employeeSlice.reducer

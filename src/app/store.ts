import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import employeeReducer from '../features/employees/redux-state-management/employeeSlice'

export const store = configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

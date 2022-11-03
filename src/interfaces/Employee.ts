export interface IEmployeeSliceState {
  register: IRegister
  errors: any
  loading: boolean
}

export interface IRegister {
  name: string
  email: string
  password: string
}

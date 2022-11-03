export interface IEmployeeSliceState {
  register: IRegister
  errors: any
  loading: boolean
  login: ILogin
}

export interface IRegister {
  name: string
  email: string
  password: string
}

export interface ILogin {
  email: string
  password: string
}

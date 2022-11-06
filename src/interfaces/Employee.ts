export interface IEmployeeSliceState {
  register: IRegister
  errors: any
  loading: boolean
  login: ILogin
  employees: IEmployee[]
}

export interface IRegister {
  name: string
  email: string
  password: string
}

export interface ILogin {
  email: string
  password: string
  token?: string
}

export interface IEmployee {
  name: string
  email: string
  _id: string
}

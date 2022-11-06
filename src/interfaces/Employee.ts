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
  username: string
  email: string
  firstName: string
  lastName: string
  role: string
  address: string
  _id?: string
}

export interface IEmployeeModal {
  title: string
  handleOk: () => void
  handleCancel: () => void
  open: boolean
  showModal: () => void
  buttonName: string
}

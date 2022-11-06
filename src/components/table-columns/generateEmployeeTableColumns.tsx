import { Button, Space } from 'antd'
import { deleteEmployees } from '../../features/employees/employeeSlice'

export const generateEmployeeTableColumns = (props: any) => {
  const { dispatch } = props

  return [
    {
      title: 'Username',
      dataIndex: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'First Name',
      dataIndex: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName'
    },
    {
      title: 'Role',
      dataIndex: 'role'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },

    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => <Button onClick={() => dispatch(deleteEmployees(record._id))}>Delete</Button>
    }
  ]
}

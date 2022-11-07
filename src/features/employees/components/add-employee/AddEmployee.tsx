import React, { useState } from 'react'
import EmployeeModal from '../../../../components/common/EmployeeModal'
import { Form, Input } from 'antd'
import { IEmployee } from '../../../../interfaces/Employee'
import { addEmployees } from '../../redux-state-management/employeeSlice'
import { useAppDispatch } from '../../../../app/hooks'

const AddEmployees = () => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)

  const [addEmployee, setAddEmployee] = useState<IEmployee>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    address: ''
  })

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOk = () => {
    dispatch(
      addEmployees({
        username: addEmployee.username,
        email: addEmployee.email,
        firstName: addEmployee.firstName,
        lastName: addEmployee.lastName,
        role: addEmployee.role,
        address: addEmployee.address
      })
    )

    setOpen(false)
  }

  return (
    <EmployeeModal
      title={'Add Employee'}
      handleOk={handleOk}
      handleCancel={handleCancel}
      open={open}
      showModal={() => setOpen(true)}
      buttonName={'Add Employee'}
    >
      <Form name='addEmployee'>
        <Form.Item name='username' label='Username' rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, username: e.target.value })} />
        </Form.Item>

        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, email: e.target.value })} />
        </Form.Item>

        <Form.Item name='firstname' label='First Name' rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, firstName: e.target.value })} />
        </Form.Item>

        <Form.Item name='lastname' label='Last Name' rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, lastName: e.target.value })} />
        </Form.Item>

        <Form.Item name='role' label='Role' rules={[{ required: true, message: 'Please input your Role!' }]}>
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, role: e.target.value })} />
        </Form.Item>

        <Form.Item name='address' label='Address' rules={[{ required: true, message: 'Please input your Address!' }]}>
          <Input onChange={(e) => setAddEmployee({ ...addEmployee, address: e.target.value })} />
        </Form.Item>
      </Form>
    </EmployeeModal>
  )
}

export default AddEmployees

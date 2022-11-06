import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addEmployees, getEmployees } from './employeeSlice'
import { Form, Input, List } from 'antd'
import EmployeeModal from '../../common/EmployeeModal'
import { IEmployee } from '../../interfaces/Employee'

const Employees = () => {
  const dispatch = useAppDispatch()

  const { employees } = useAppSelector((state) => state.employee)
  const [open, setOpen] = useState<boolean>(false)

  const [addEmployee, setAddEmployee] = useState<IEmployee>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    address: ''
  })

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

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
    <div>
      <h1>Employees</h1>
      <List itemLayout='horizontal' dataSource={employees} renderItem={(item) => <List.Item>{item.username}</List.Item>} />
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
    </div>
  )
}

export default Employees

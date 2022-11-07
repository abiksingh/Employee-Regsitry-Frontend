import React, { useState } from 'react'
import EmployeeModal from '../../../../components/common/modal/EmployeeModal'
import { Form, Input, Typography } from 'antd'
import { IEmployee } from '../../../../interfaces/Employee'
import { addEmployees } from '../../redux-state-management/employeeSlice'
import { useAppDispatch } from '../../../../app/hooks'
import { useForm } from 'antd/es/form/Form'

const AddEmployees = () => {
  const dispatch = useAppDispatch()
  const [addEmployeeForm] = useForm()

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
    addEmployeeForm.resetFields()
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
      <Form form={addEmployeeForm} name='addEmployeeForm'>
        <Typography.Text type='secondary'>Username</Typography.Text>
        <Form.Item name={'username'} rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder={'Username'} onChange={(e) => setAddEmployee({ ...addEmployee, username: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Email</Typography.Text>
        <Form.Item
          name='email'
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
          <Input placeholder={'Email'} onChange={(e) => setAddEmployee({ ...addEmployee, email: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>First Name</Typography.Text>
        <Form.Item name={'firstName'} rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input placeholder={'First Name'} onChange={(e) => setAddEmployee({ ...addEmployee, firstName: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Last Name</Typography.Text>
        <Form.Item name={'lastName'} rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input placeholder={'Last Name'} onChange={(e) => setAddEmployee({ ...addEmployee, lastName: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Role</Typography.Text>
        <Form.Item name={'role'} rules={[{ required: true, message: 'Please input your Role!' }]}>
          <Input placeholder={'Role'} onChange={(e) => setAddEmployee({ ...addEmployee, role: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Address</Typography.Text>
        <Form.Item name={'address'} rules={[{ required: true, message: 'Please input your Address!' }]}>
          <Input placeholder={'Address'} onChange={(e) => setAddEmployee({ ...addEmployee, address: e.target.value })} />
        </Form.Item>
      </Form>
    </EmployeeModal>
  )
}

export default AddEmployees

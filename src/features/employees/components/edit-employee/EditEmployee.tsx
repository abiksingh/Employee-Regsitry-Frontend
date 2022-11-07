import React from 'react'
import EmployeeModal from '../../../../components/common/modal/EmployeeModal'
import { Form, Input, Typography } from 'antd'
import { IEditEmployee } from '../../../../interfaces/Employee'

const EditEmployees = (props: IEditEmployee) => {
  const { handleOk, handleCancel, open, setOpen, setEditEmployee, editEmployee } = props

  return (
    <EmployeeModal title={'Edit Employee'} handleOk={handleOk} handleCancel={handleCancel} open={open} showModal={() => setOpen(true)}>
      <Form name='editEmployee'>
        <Typography.Text type='secondary'>Username</Typography.Text>
        <Form.Item rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input value={editEmployee.username} onChange={(e) => setEditEmployee({ ...editEmployee, username: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Email</Typography.Text>
        <Form.Item
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
          <Input value={editEmployee.email} onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>FirstName</Typography.Text>
        <Form.Item rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input value={editEmployee.firstName} onChange={(e) => setEditEmployee({ ...editEmployee, firstName: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Last Name</Typography.Text>
        <Form.Item rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input value={editEmployee.lastName} onChange={(e) => setEditEmployee({ ...editEmployee, lastName: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Role</Typography.Text>
        <Form.Item rules={[{ required: true, message: 'Please input your Role!' }]}>
          <Input value={editEmployee.role} onChange={(e) => setEditEmployee({ ...editEmployee, role: e.target.value })} />
        </Form.Item>
        <Typography.Text type='secondary'>Address</Typography.Text>
        <Form.Item rules={[{ required: true, message: 'Please input your Address!' }]}>
          <Input value={editEmployee.address} onChange={(e) => setEditEmployee({ ...editEmployee, address: e.target.value })} />
        </Form.Item>
      </Form>
    </EmployeeModal>
  )
}

export default EditEmployees

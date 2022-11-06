import React from 'react'
import EmployeeModal from '../../../components/common/EmployeeModal'
import { Form, Input } from 'antd'
import { IEditEmployee } from '../../../interfaces/Employee'

const EditEmployees = (props: IEditEmployee) => {
  const { handleOk, handleCancel, open, setOpen, setEditEmployee, editEmployee } = props

  return (
    <EmployeeModal title={'Edit Employee'} handleOk={handleOk} handleCancel={handleCancel} open={open} showModal={() => setOpen(true)}>
      <Form name='editEmployee'>
        <Form.Item label='Username' rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input value={editEmployee.username} onChange={(e) => setEditEmployee({ ...editEmployee, username: e.target.value })} />
        </Form.Item>

        <Form.Item
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
          <Input value={editEmployee.email} onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })} />
        </Form.Item>

        <Form.Item label='First Name' rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input value={editEmployee.firstName} onChange={(e) => setEditEmployee({ ...editEmployee, firstName: e.target.value })} />
        </Form.Item>

        <Form.Item label='Last Name' rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input value={editEmployee.lastName} onChange={(e) => setEditEmployee({ ...editEmployee, lastName: e.target.value })} />
        </Form.Item>

        <Form.Item label='Role' rules={[{ required: true, message: 'Please input your Role!' }]}>
          <Input value={editEmployee.role} onChange={(e) => setEditEmployee({ ...editEmployee, role: e.target.value })} />
        </Form.Item>

        <Form.Item label='Address' rules={[{ required: true, message: 'Please input your Address!' }]}>
          <Input value={editEmployee.address} onChange={(e) => setEditEmployee({ ...editEmployee, address: e.target.value })} />
        </Form.Item>
      </Form>
    </EmployeeModal>
  )
}

export default EditEmployees

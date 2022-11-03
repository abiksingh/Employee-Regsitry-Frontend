import React, { useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { Button, Form, Input } from 'antd'
import { registerEmployee } from '../employeeSlice'

const Register = () => {
  const dispatch = useAppDispatch()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleFinish = () => {
    dispatch(
      registerEmployee({
        name,
        email,
        password
      })
    )
  }

  console.log(name)
  console.log(email)
  console.log(password)

  return (
    <div>
      <Form onFinish={handleFinish} name='register'>
        <Form.Item name='name' label='Name' tooltip='What do you want others to call you?' rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input onChange={(e) => setName(e.target.value)} />
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
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
          hasFeedback
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register

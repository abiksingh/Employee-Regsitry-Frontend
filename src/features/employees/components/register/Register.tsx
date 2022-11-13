import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { Button, Form, Input, Layout, Typography } from 'antd'
import { registerEmployee } from '../../redux-state-management/employeeSlice'
import { Content } from 'antd/es/layout/layout'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useAppDispatch()
  const [registerForm] = useForm()
  const navigate = useNavigate()

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
    navigate('/login')
    registerForm.resetFields()
  }

  return (
    <div>
      <Layout className={'layout-height '}>
        <Content className={'content'}>
          <Form onFinish={handleFinish} form={registerForm} name='registerForm'>
            <Typography.Text type='secondary'>Name</Typography.Text>
            <Form.Item name='name' tooltip='What do you want others to call you?' rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input placeholder={'name'} onChange={(e) => setName(e.target.value)} />
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
              <Input placeholder={'email'} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Typography.Text type='secondary'>Password</Typography.Text>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
              hasFeedback
            >
              <Input.Password placeholder={'password'} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className={'mt-2'} type='primary' htmlType='submit'>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Register

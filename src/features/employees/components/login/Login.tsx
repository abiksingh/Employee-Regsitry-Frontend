import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { Button, Form, Input, Layout, Typography } from 'antd'
import { loginEmployee } from '../../redux-state-management/employeeSlice'
import { useNavigate } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
import { useForm } from 'antd/es/form/Form'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [loginForm] = useForm()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleFinish = () => {
    dispatch(
      loginEmployee({
        email,
        password
      })
    )

    navigate('/home')
    loginForm.resetFields()
  }

  return (
    <div>
      <Layout className={'layout-height '}>
        <Content className={'content'}>
          <Form onFinish={handleFinish} form={loginForm} name='loginForm'>
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
              <Input onChange={(e) => setEmail(e.target.value)} />
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
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit'>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  )
}

export default Login

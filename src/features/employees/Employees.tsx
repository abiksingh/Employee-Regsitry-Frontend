import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getEmployees } from './employeeSlice'
import { List } from 'antd'

const Employees = () => {
  const dispatch = useAppDispatch()

  const { employees } = useAppSelector((state) => state.employee)

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  return (
    <div>
      <h1>Employees</h1>
      <List itemLayout='horizontal' dataSource={employees} renderItem={(item) => <List.Item>{item.name}</List.Item>} />
    </div>
  )
}

export default Employees

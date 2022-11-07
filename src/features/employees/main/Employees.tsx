import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { editEmployees, getEmployees } from '../redux-state-management/employeeSlice'
import { Table } from 'antd'
import { IEmployee } from '../../../interfaces/Employee'
import { generateEmployeeTableColumns } from '../../../components/table-columns/generateEmployeeTableColumns'
import AddEmployee from '../components/add-employee/AddEmployee'
import EditEmployee from '../components/edit-employee/EditEmployee'
import { useNavigate } from 'react-router-dom'

const Employees = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { employees } = useAppSelector((state) => state.employee)

  const [editEmployee, setEditEmployee] = useState<IEmployee>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    address: ''
  })
  const [open, setOpen] = useState<boolean>(false)
  const [employeeId, setEmployeeId] = useState<string | undefined>('')

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOk = () => {
    dispatch(
      editEmployees({
        username: editEmployee.username,
        email: editEmployee.email,
        firstName: editEmployee.firstName,
        lastName: editEmployee.lastName,
        role: editEmployee.role,
        address: editEmployee.address,
        _id: employeeId
      })
    )

    setOpen(false)
  }

  return (
    <div>
      <h1>Employees</h1>
      <Table
        rowKey='_id'
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setEmployeeId(record._id)
              setEditEmployee({
                ...record
              })

              setOpen(true)
            }
          }
        }}
        columns={generateEmployeeTableColumns({ dispatch, navigate })}
        dataSource={employees || []}
      />

      <AddEmployee />
      <EditEmployee
        handleOk={handleOk}
        handleCancel={handleCancel}
        open={open}
        setOpen={setOpen}
        setEditEmployee={setEditEmployee}
        editEmployee={editEmployee}
      />
    </div>
  )
}

export default Employees

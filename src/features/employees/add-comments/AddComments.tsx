import React, { useEffect, useState } from 'react'
import EmployeeModal from '../../../components/common/EmployeeModal'
import { Form, Input, Table } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addComments, getEmployeeById } from '../employeeSlice'
import { useParams } from 'react-router-dom'
import { generateCommentTableColumns } from '../../../components/table-columns/generateCommentTableColumns'

const AddComments = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { employee } = useAppSelector((state) => state.employee)

  const [open, setOpen] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOk = () => {
    dispatch(
      addComments({
        id,
        comment
      })
    )

    setOpen(false)
  }

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeById(id))
    }
  }, [dispatch, id])

  return (
    <>
      <h1>Comments</h1>

      <Table rowKey='_id' columns={generateCommentTableColumns()} dataSource={employee.comment || []} />

      <EmployeeModal
        title={'Add Comments'}
        handleOk={handleOk}
        handleCancel={handleCancel}
        open={open}
        showModal={() => setOpen(true)}
        buttonName={'Add Comments'}
      >
        <Form name='addComments'>
          <Form.Item name='addComments' label='Add Comments' rules={[{ required: true, message: 'Input a comment here!' }]}>
            <Input.TextArea rows={4} onChange={(e) => setComment(e.target.value)} />
          </Form.Item>
        </Form>
      </EmployeeModal>
    </>
  )
}

export default AddComments

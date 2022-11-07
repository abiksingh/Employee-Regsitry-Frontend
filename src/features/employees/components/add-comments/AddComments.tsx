import React, { useEffect, useState } from 'react'
import EmployeeModal from '../../../../components/common/modal/EmployeeModal'
import { Card, Form, Input, Layout, Table, Typography } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { addComments, getEmployeeById } from '../../redux-state-management/employeeSlice'
import { useParams } from 'react-router-dom'
import { generateCommentTableColumns } from '../../../../components/table-columns/generateCommentTableColumns'
import { useForm } from 'antd/es/form/Form'
import { Content } from 'antd/es/layout/layout'

const AddComments = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const [addCommentForm] = useForm()

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

    addCommentForm.resetFields()
  }

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeById(id))
    }
  }, [dispatch, id])

  return (
    <>
      <Typography.Title className={'content'}>Comments</Typography.Title>
      <Layout className={'layout-height '}>
        <Content>
          <Card>
            <div className={'mt-2'}>
              <EmployeeModal
                title={'Add Comments'}
                handleOk={handleOk}
                handleCancel={handleCancel}
                open={open}
                showModal={() => setOpen(true)}
                buttonName={'Add Comments'}
              >
                <Form form={addCommentForm} name='addCommentForm'>
                  <Typography.Text type='secondary'>Add Comment</Typography.Text>
                  <Form.Item name={'addComment'} rules={[{ required: true, message: 'Input a comment here!' }]}>
                    <Input.TextArea rows={4} onChange={(e) => setComment(e.target.value)} />
                  </Form.Item>
                </Form>
              </EmployeeModal>
            </div>
            <div className={'mt-2'}>
              <Table rowKey='_id' columns={generateCommentTableColumns()} dataSource={employee.comment || []} />
            </div>
          </Card>
        </Content>
      </Layout>
    </>
  )
}

export default AddComments

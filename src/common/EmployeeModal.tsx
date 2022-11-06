import React, { PropsWithChildren } from 'react'
import { Button, Modal } from 'antd'
import { IEmployeeModal } from '../interfaces/Employee'

const EmployeeModal = (props: PropsWithChildren<IEmployeeModal>) => {
  const { title, open, handleOk, handleCancel, showModal, children, buttonName } = props

  return (
    <>
      <Button type='primary' onClick={showModal}>
        {buttonName}
      </Button>
      <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  )
}

export default EmployeeModal

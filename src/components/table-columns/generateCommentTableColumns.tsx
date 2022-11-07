import { List } from 'antd'
import moment from 'moment'

export const generateCommentTableColumns = () => {
  return [
    {
      title: 'Comment',
      dataIndex: 'comment'
    },
    {
      title: 'Author',
      dataIndex: 'name'
    },
    {
      title: 'Created At',
      render: (_: any, record: any) => <List.Item>{moment(record.createdAt).utc().format('YYYY-MM-DD')}</List.Item>
    }
  ]
}

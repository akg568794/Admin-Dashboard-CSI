import { Text } from '@/components/text'
import { User } from '@/graphql/schema.types'
import { DeleteOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Dropdown, theme } from 'antd'
import { MenuProps } from 'antd/lib'
import { useMemo } from 'react'
type ProjectCardProps={
  id:string,
  title:string,
  updatedAt: string,
  dueDate?:string,
  users?:{
    id:string,
    name:string,
    avatarUrl?:User['avatarUrl']

  }[]


}

const ProjectCard = ({id,title,dueDate,users}:ProjectCardProps) => {
  const {token}=theme.useToken()
  const edit=()=>{}

  const dropdownItems = useMemo(() => {
    const dropdownItems: MenuProps['items'] = [
      {
        label: 'View card',
        key: '1',
        icon: <EyeOutlined />,
        onClick: () => {
          // edit('tasks', id, 'replace')
        }
      },
      {
        danger: true,
        label: 'Delete card',
        key: '2',
        icon: <DeleteOutlined />,
        onClick: () => {
          // mutate({
          //   resource: 'tasks',
          //   id,
          //   meta: {
          //     operation: 'task'
          //   }
          // })
        }
      }
    ]

    return dropdownItems
  }, [])
  return (
    <ConfigProvider
      theme={{
        components:{
          Tag:{
            colorText: token.colorTextSecondary,
          },
          Card:{
            headerBg: 'transparent',
          }
        }
      }}>
        <Card
        size="small"
        title={<Text ellipsis={{tooltip:title}}>{title}</Text>}
        onClick={()=>{edit()}}
        extra={
          <Dropdown
          trigger={["click"]}
          menu={{
            items:dropdownItems,

          }}
          >
            <Button
            type='text'
            shape='circle'
            icon={
              <MoreOutlined
              style={{
                transform: 'rotate(90deg)',
              }}
              />
            }
            onPointerDown={(e)=>{
              e.stopPropagation()
            }}  
            onClick={(e)=>{
              e.stopPropagation()
            }}  
            />

          </Dropdown>
        }

        >

        </Card>
      
    </ConfigProvider>
  )
}

export default ProjectCard
import CurrentUSer from "./current-user"
import { Layout,Space } from "antd"

const Header = () => {
  const headerStyles:React.CSSProperties = {
    background: '#fff',
    display:'flex',
    justifyContent: 'flex-end',
    alignItems:'center',
    padding:' 0 24px',
    position:'sticky',
    top:0,
    zIndex:999,
    boxShadow:'0 1px 4px rgba(0, 0, 0, 0.08)',
    borderBottom:'1px solid #f0f0f0'

  }
  return (
    <Layout.Header style={headerStyles}>
      <Space  align="center" size="middle">
        <CurrentUSer/> 
      </Space>
    </Layout.Header>
  )
}

export default Header
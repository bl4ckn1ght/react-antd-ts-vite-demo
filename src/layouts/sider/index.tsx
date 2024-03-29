import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useContext } from 'react'
import './index.less'
import { CollapsedContext } from '@/utils/context'

const { Sider } = Layout

const sider: React.FC = () => {
	const { collapsed } = useContext(CollapsedContext)


	return (
		<Sider trigger={null} collapsible collapsed={collapsed} className="site-sider">
			<div className="logo" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '1',
						icon: <UserOutlined />,
						label: 'nav 1'
					},
					{
						key: '2',
						icon: <VideoCameraOutlined />,
						label: 'nav 2'
					},
					{
						key: '3',
						icon: <UploadOutlined />,
						label: 'nav 3'
					}
				]}
			/>
		</Sider>
	)
}

export default sider

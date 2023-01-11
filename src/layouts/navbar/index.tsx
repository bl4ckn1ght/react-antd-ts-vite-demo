import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import React, { useContext } from 'react'
import './index.less'
import { CollapsedContext } from '@/utils/context'

const { Header } = Layout

const navbar: React.FC = () => {

	const { collapsed, setCollapsed } = useContext(CollapsedContext)

	return (
		<Header className="site-nav" style={{ padding: 0 }}>
			{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: 'trigger',
				onClick: () => { setCollapsed(!collapsed); console.log('navbar', collapsed) }
			})}
		</Header>
	)
}

export default navbar

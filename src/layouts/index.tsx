import { Outlet } from 'react-router'
import { Layout } from 'antd'
import React from 'react'
import './index.less'

import Sider from './sider/index'
import Navbar from './navbar/index'

const { Content } = Layout

const layoutIndex: React.FC = () => {
	return (
		<Layout className="container">
			<Sider />
			<Layout className="site-layout">
				<Navbar />
				<Content className="site-content">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default layoutIndex

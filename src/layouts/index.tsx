import { Outlet } from 'react-router'
import { Layout } from 'antd'
import React, { useState } from 'react'
import './index.less'

import Sider from './sider/index'
import Navbar from './navbar/index'

import { CollapsedContext } from '@/utils/context'

const { Content } = Layout

const layoutIndex: React.FC = () => {

	const [collapsed, setCollapsed] = useState(false)

	return (
		<CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
			<Layout className="container">
				<Sider />
				<Layout className="site-layout">
					<Navbar />
					<Content className="site-content">
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</CollapsedContext.Provider>
	)
}

export default layoutIndex

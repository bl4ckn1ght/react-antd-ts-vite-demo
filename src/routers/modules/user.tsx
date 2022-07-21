import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import LayoutIndex from '@/layouts/index'

// dashboard 模块
const userRouter: Array<any> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: 'user'
		},
		children: [
			{
				path: '/page',
				element: lazyLoad(React.lazy(() => import('@/views/user/page'))),
				meta: {
					requiresAuth: true,
					title: '测试页面',
					key: 'page'
				}
			}
		]
	}
]

export default userRouter

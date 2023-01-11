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
				path: '/login',
				element: lazyLoad(React.lazy(() => import('@/views/user/login/index'))),
				meta: {
					requiresAuth: true,
					title: '登录页面',
					key: 'login'
				}
			},
			{
				path: '/page',
				element: lazyLoad(React.lazy(() => import('@/views/user/page'))),
				meta: {
					requiresAuth: true,
					title: '测试页面',
					key: 'page'
				}
			},
			{
				path: '/test',
				element: lazyLoad(React.lazy(() => import('@/views/user/test'))),
				meta: {
					requiresAuth: true,
					title: '测试页面1',
					key: 'page'
				}
			},
			{
				path: '/info',
				element: lazyLoad(React.lazy(() => import('@/views/user/info'))),
				meta: {
					requiresAuth: true,
					title: '个人信息',
					key: 'page'
				}
			}
		]
	}
]

export default userRouter

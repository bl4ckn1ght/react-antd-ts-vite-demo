import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true })

// * 处理路由
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item:any) => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key])
	})
})

export const rootRouter: RouteObject[] = [
	...routerArray,
	{
		path: '*',
		element: <Navigate to="/404" />
	}
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router

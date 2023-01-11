import request from '@/utils/axios'

interface ILoginInfo {
	username: string
	password: string
}

// 用户登录
export function userLogin(data: ILoginInfo) {
	return request({
		url: '/login',
		data
	})
}

interface IuserInfo {
	userId: number
}

// 用户信息
export function userInfo(data: IuserInfo) {
	return request({
		url: 'user/info',
		data
	})
}

import SvgIcon from '@/components/svgIcon/index'
import { userLogin, userInfo } from '@/api/index'
import { Button } from 'antd'
import React, { Component, ReactPropTypes } from 'react'

class homeIndex extends Component {
	constructor(props: ReactPropTypes) {
		super(props)
		this.state = {
			userInfo: {}
		}
	}

	userLoginFn = () => {
		userLogin({
			username: '31231',
			password: '2331231231'
		}).then(res => {
			if (res.code == 0) {
				console.log(res.data)
				this.setState({
					userInfo: res.data
				})
			}
		})
	}

	getUserInfoFn = () => {
		userInfo({
			userId: this.state.userInfo.id
		}).then(res => {
			if (res.code == 0) {
				console.log(res.data)
			}
		})
	}

	render() {
		return (
			<div>
				<div className="name">用户信息</div>
				<div>{JSON.stringify(this.state.userInfo)}</div>
				<SvgIcon icon={'jimu'} />
				<Button
					type={'default'}
					onClick={() => {
						this.userLoginFn()
					}}>
					点击请求
				</Button>
				<Button
					type={'primary'}
					onClick={() => {
						this.getUserInfoFn()
					}}>
					获取用户信息
				</Button>
			</div>
		)
	}

}

export default homeIndex

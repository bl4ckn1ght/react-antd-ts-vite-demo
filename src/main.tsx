import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'normalize.css'
import 'antd/dist/antd.less'
import '@/styles/common.less'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'virtual:svg-icons-register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

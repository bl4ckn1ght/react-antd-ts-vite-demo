import Router from '@/routers'
import { BrowserRouter } from 'react-router-dom'
import './App.less'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	)
}

export default App

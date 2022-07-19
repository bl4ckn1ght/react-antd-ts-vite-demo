import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PageIndex from './views/page'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Link to="/">to app</Link>
			<Link to="page">to page</Link>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="page" element={<PageIndex />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

import './App.css'
import { Routes, Route } from 'react-router-dom'

import {
	NavbarComponent,
	Search,
	About,
	SubNav,
	Home,
	NotFound,
} from './components/index'
import React from 'react'

function App() {
	return (
		<div>
			<NavbarComponent></NavbarComponent>
			<SubNav></SubNav>
			<Routes>
				<Route path='/' element={<Home></Home>} />
				<Route path='/home' element={<Home></Home>} />
				<Route path='/search' element={<Search></Search>} />
				<Route path='/about' element={<About></About>} />
				<Route path='*' element={<NotFound></NotFound>} />
			</Routes>
		</div>
	)
}

export default App

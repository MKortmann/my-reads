import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
	NavbarComponent,
	Search,
	About,
	SubNav,
	Home,
	NotFound,
} from './components/index'

import { Book } from './types/types'
import { getAll, update, get } from './API/BooksAPI'
import Alert from 'react-bootstrap/Alert'

function App() {
	const [books, setBooks] = useState<Array<Book>>([])
	const [alert, setAlert] = useState<any[]>([false, '', ''])

	useEffect(() => {
		getAll().then((books: Array<Book>) => setBooks(books))
	}, [])

	const changeShelf = (id: number, shelf: string, newShelf: string) => {
		const book = books.filter((book) => book.id === id)

		if (shelf !== newShelf && shelf !== 'none') {
			update(book[0], newShelf).then(() => {
				getAll().then((books: Array<Book>) => {
					setBooks(books)
					message(setAlert, 'info', `The book ${book[0].title} changed shelf!`)
				})
			})
		} else if (shelf === 'none') {
			get(id).then((book) => {
				update(book, newShelf).then(() => {
					getAll().then((books: Array<Book>) => {
						setBooks(books)
					})
				})
			})
		} else {
			message(setAlert, 'warning', `The book is already on this shelf`)
		}
	}
	return (
		<div>
			<NavbarComponent></NavbarComponent>
			<SubNav></SubNav>
			{alert[0] && <Alert variant={alert[1]}>{alert[2]}</Alert>}

			<Routes>
				{['/', '/home'].map((path, index) => (
					<Route
						key={index}
						path={path}
						element={<Home books={books} changeShelf={changeShelf}></Home>}
					/>
				))}

				<Route
					path='/search'
					element={<Search books={books} changeShelf={changeShelf}></Search>}
				/>
				<Route path='/about' element={<About></About>} />
				<Route path='*' element={<NotFound></NotFound>} />
			</Routes>
		</div>
	)
}

export default App

function message(setAlert: any, variant: string, msg: string) {
	setAlert([true, variant, msg])
	setTimeout(() => {
		setAlert([false, '', ''])
	}, 5000)
}

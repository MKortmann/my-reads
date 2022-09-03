import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { css } from '@emotion/css'
import { getAll, update } from '../../API/BooksAPI'
import { AddButton, Shelf } from '../index'
import { Book } from '../../types'
import Alert from 'react-bootstrap/Alert'

export const Home = () => {
	const ShelfNames = ['Currently Reading', 'Want To Read', 'Read']

	const [books, setBooks] = useState<Array<Book>>([])
	const [alert, setAlert] = useState<any[]>([false, '', ''])

	useEffect(() => {
		getAll().then((books) => setBooks(books))
	}, [])

	const changeShelf = (id: number, shelf: string, newShelf: string) => {
		const book = books.filter((book) => book.id === id)

		if (shelf !== newShelf) {
			update(book[0], newShelf).then(() => {
				getAll().then((books) => {
					setBooks(books)
					message(setAlert, 'info', `The book ${book[0].title} changed shelf!`)
				})
			})
		} else {
			message(setAlert, 'warning', `The book is already on this shelf`)
		}
	}

	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
			{alert[0] && <Alert variant={alert[1]}>{alert[2]}</Alert>}
			<Stack gap={4} direction={'vertical'}>
				{ShelfNames.map((title, index) => {
					return (
						<Shelf
							key={index}
							title={title}
							books={books}
							changeShelf={changeShelf}></Shelf>
					)
				})}
			</Stack>
			<AddButton></AddButton>
		</Container>
	)
}
function message(setAlert: any, variant: string, msg: string) {
	setAlert([true, variant, msg])
	setTimeout(() => {
		setAlert([false, '', ''])
	}, 5000)
}

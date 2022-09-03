import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { css } from '@emotion/css'
import { getAll, get, update } from '../../API/BooksAPI'
import { AddButton, Shelf } from '../index'
import { Book } from '../../types'

export const Home = () => {
	const ShelfNames = ['Currently Reading', 'Want To Read', 'Read']

	const [books, setBooks] = useState<Array<Book>>([])

	useEffect(() => {
		getAll().then((books) => setBooks(books))
	}, [])

	const changeShelf = (id: number, shelf: string, newShelf: string) => {
		const book = books.filter((book) => book.id === id)

		if (shelf !== newShelf) {
			update(book[0], newShelf).then(() => {
				getAll().then((books) => {
					setBooks(books)
				})
			})
			console.log({ shelf: newShelf })
		} else {
			alert(`the book is already on this ${shelf} shelf`)
		}
	}

	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
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

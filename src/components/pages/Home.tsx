import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { css } from '@emotion/css'
import { getAll } from '../../API/BooksAPI'

import { AddButton, ShelfComponent } from '../index'

export const Home = () => {
	const ShelfNames = ['Currently Reading', 'Want To Read', 'Read']
	const shelfs = ['currentlyReading', 'wantToRead', 'read']

	const [books, setBooks] = useState([])

	useEffect(() => {
		getAll().then((books) => setBooks(books))
	}, [])
	console.log(books)

	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
			<Stack gap={4} direction={'vertical'}>
				{ShelfNames.map((title, index) => {
					return (
						<ShelfComponent
							key={index}
							title={title}
							books={books}></ShelfComponent>
					)
				})}
			</Stack>
			<AddButton></AddButton>
		</Container>
	)
}

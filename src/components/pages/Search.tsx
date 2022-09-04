import { useState, useEffect } from 'react'
import { search } from '../../API/BooksAPI'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { Book } from '../../types'
import { BookComponent } from '../index'

interface Props {
	changeShelf: any
	books: Book[]
}

export const Search: React.FC<Props> = ({ changeShelf, books }) => {
	const [newBooks, setNewBooks] = useState<Book[]>([])

	const searchBook = (value: string) => {
		if (value !== '') {
			search(value).then((newBooks) => {
				const tmp = newBooks.error !== 'empty query' ? [...newBooks] : []
				return setNewBooks([...tmp])
			})
		} else {
			setTimeout(() => {
				setNewBooks([])
			}, 1000)
		}
	}

	return (
		<Container
			className={css`
				margin-top: 30px;
			`}>
			<Row>
				<Col xs='auto'>
					<Link to='/home'>
						<BsFillArrowLeftSquareFill
							className={css`
								cursor: pointer;
								display: flex
								align-items: center
								:hover {
									color: blue;
									font-size: 2.2em;
								}
							`}
							size='3.3em'></BsFillArrowLeftSquareFill>
					</Link>
				</Col>
				<Col xs={11}>
					<FloatingLabel
						controlId='floatingInput'
						label='Search Book by title, author, or ISBN'
						className='mb-3'>
						<Form.Control
							type='text'
							onChange={(event) => {
								searchBook(event.target.value)
							}}
						/>
					</FloatingLabel>
				</Col>
			</Row>

			{newBooks.length > 0 && (
				<Row
					className={css`
						justify-content: center;
					`}>
					{newBooks.map((newBook, index) => {
						for (let book of books) {
							newBook['shelf'] = book.id === newBook.id ? book.shelf : 'none'
						}

						return (
							<BookComponent
								key={index}
								title={newBook.title}
								authors={newBook.authors}
								img={newBook.imageLinks?.smallThumbnail}
								shelf={newBook.shelf}
								md={2}
								id={newBook.id}
								changeShelf={changeShelf}></BookComponent>
						)
					})}
				</Row>
			)}
		</Container>
	)
}

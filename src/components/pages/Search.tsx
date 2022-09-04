import { useState } from 'react'
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
}

export const Search: React.FC<Props> = ({ changeShelf }) => {
	const [books, setBooks] = useState<Book[]>([])

	const searchBook = (value: string) => {
		search(value).then((books) => setBooks(books))
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

			<Row
				className={css`
					justify-content: center;
				`}>
				{books.map((book, index) => {
					return (
						<BookComponent
							key={index}
							title={book.title}
							authors={book.authors}
							img={book.imageLinks?.smallThumbnail}
							shelf={'none'}
							md={2}
							id={book.id}
							changeShelf={changeShelf}></BookComponent>
					)
				})}
			</Row>
		</Container>
	)
}

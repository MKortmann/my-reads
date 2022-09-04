import { useState } from 'react'
import { search } from '../../API/BooksAPI'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { css, cx } from '@emotion/css'
import { Book } from '../../types/types'
import { BookComponent } from '../index'
import { searchStyles } from '../../styles/styles'

interface Props {
	changeShelf: any
	books: Book[]
}

export const Search: React.FC<Props> = ({ changeShelf, books }) => {
	const style = searchStyles()
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
			}, 300)
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
							className={cx(style.icon)}
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
							if (book.id === newBook.id) {
								newBook['shelf'] = book.shelf
								break
							}
						}

						return (
							<BookComponent
								key={index}
								title={newBook.title}
								authors={newBook.authors}
								img={newBook.imageLinks?.smallThumbnail}
								shelf={newBook?.shelf || 'none'}
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

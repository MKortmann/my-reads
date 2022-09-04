import React from 'react'
import { BookComponent } from '../index'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import { Book } from '../../types/types'

interface Props {
	title: string
	books: Book[]
	changeShelf: (id: number, shelf: string, newShelf: string) => void
}

export const Shelf: React.FC<Props> = ({ title, books, changeShelf }) => {
	const shelf =
		title.slice(0, 1).toLowerCase() + title.replace(/ /g, '').substring(1)

	console.log(shelf)
	return (
		<Accordion defaultActiveKey='0' className='text-center'>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>
					<h3>{title}</h3>
				</Accordion.Header>
				<Accordion.Body>
					<Row xs={1} md={2} className='justify-content-md-center'>
						{books
							.filter((book: any) => book.shelf === shelf)
							.map((book: any, index: number) => {
								return (
									<BookComponent
										key={index}
										title={book.title}
										authors={book.authors}
										img={book.imageLinks.smallThumbnail}
										shelf={book.shelf}
										md={2}
										id={book.id}
										changeShelf={changeShelf}></BookComponent>
								)
							})}
					</Row>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

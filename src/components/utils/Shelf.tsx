import React from 'react'
import { BookComponent } from '../index'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'

interface Props {
	title: string
	books: any
}

export const ShelfComponent: React.FC<Props> = ({ title, books }) => {
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
										md={2}></BookComponent>
								)
							})}
					</Row>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

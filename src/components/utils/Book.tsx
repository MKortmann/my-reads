import React from 'react'

import Card from 'react-bootstrap/Card'
import { Menu } from '../index'

interface Props {
	title: string
	md: any
	authors: string[]
}

export const BookComponent: React.FC<Props> = ({ title, authors }) => {
	return (
		<Card style={{ width: '18rem', margin: '10px' }}>
			<Card.Img variant='top' src='holder.js/100px180' />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				{authors.map((author) => (
					<Card.Text>{author}</Card.Text>
				))}
				<Menu title={'move'}></Menu>
			</Card.Body>
		</Card>
	)
}

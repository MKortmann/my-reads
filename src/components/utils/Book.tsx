import React from 'react'

import Card from 'react-bootstrap/Card'
import { Menu } from '../index'
import { cx } from '@emotion/css'
import { bookStyles } from '../../styles/styles'

interface Props {
	title: string
	md: number
	authors: string[]
	img: string
	shelf: string
	changeShelf: (id: number, shelf: string, newShelf: string) => void
	id: number
}

export const Book: React.FC<Props> = ({
	title,
	authors,
	img,
	shelf,
	changeShelf,
	id,
}) => {
	const style = bookStyles()
	return (
		<Card className={cx(style.card)}>
			<Card.Img variant='top' src={img} className={cx(style.cardImg)} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{authors?.map((author) => {
						return authors?.length === 1 ? author : `${author}, `
					})}
				</Card.Text>
				<div className={cx(style.menu)}>
					<Menu shelf={shelf} changeShelf={changeShelf} id={id}></Menu>
				</div>
			</Card.Body>
		</Card>
	)
}

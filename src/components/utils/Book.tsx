import React from 'react'

import Card from 'react-bootstrap/Card'
import { Menu } from '../index'
import { css } from '@emotion/css'

interface Props {
	title: string
	md: any
	authors: string[]
	img: string
	shelf: string
	changeShelf: any
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
	return (
		<Card style={{ width: '16rem', margin: '10px', marginBottom: '0' }}>
			<Card.Img
				variant='top'
				src={img}
				className={css`
					width: 50%;
					height: 7vw;
					margin: auto;
				`}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{authors.map((author, index) =>
						authors.length === 1 ? author : `${author}, `
					)}
				</Card.Text>
				<div
					className={css`
						position: absolute;
						top: 0;
						right: 0;
					`}>
					<Menu shelf={shelf} changeShelf={changeShelf} id={id}></Menu>
				</div>
			</Card.Body>
		</Card>
	)
}

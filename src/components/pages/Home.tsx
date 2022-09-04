import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { css } from '@emotion/css'

import { AddButton, Shelf } from '../index'
import { Book } from '../../types'

interface Props {
	books: Book[]
	changeShelf: any
}

export const Home: React.FC<Props> = ({ books, changeShelf }) => {
	const ShelfNames = ['Currently Reading', 'Want To Read', 'Read']

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

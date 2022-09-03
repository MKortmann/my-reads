import { search } from '../../API/BooksAPI'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

export const Search = () => {
	search('car', 10).then((books) => console.log(books))

	return (
		<Container className='mt-5'>
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
								console.log(event.target.value)
							}}
						/>
					</FloatingLabel>
				</Col>
			</Row>
		</Container>
	)
}

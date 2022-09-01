import Card from 'react-bootstrap/Card'
import { Menu } from '../index'

export const BookComponent = () => {
	return (
		<Card style={{ width: '18rem', margin: '10px' }}>
			<Card.Img variant='top' src='holder.js/100px180' />
			<Card.Body>
				<Card.Title>Book Name</Card.Title>
				<Card.Text>Author</Card.Text>
				<Menu title={'move'}></Menu>
			</Card.Body>
		</Card>
	)
}

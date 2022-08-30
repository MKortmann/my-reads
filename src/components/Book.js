import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const BookComponent = () => {
	return (
		<Card style={{ width: '18rem', margin: '10px' }}>
			<Card.Img variant='top' src='holder.js/100px180' />
			<Card.Body>
				<Card.Title>Book Name</Card.Title>
				<Card.Text>Author</Card.Text>
				<Button variant='primary'>move</Button>
			</Card.Body>
		</Card>
	)
}

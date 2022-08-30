import { BookComponent } from './index.js'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
export const ShelfComponent = ({ title }) => {
	return (
		<Accordion defaultActiveKey='0' className='text-center'>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>{title}</Accordion.Header>
				<Accordion.Body>
					<Row xs={1} md={2} className='justify-content-md-center'>
						<BookComponent title={title} md={2}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
						<BookComponent title={title}></BookComponent>
					</Row>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

interface Props {
	title: string
}

export const Menu: React.FC<Props> = ({ title }) => {
	return (
		<Dropdown>
			<Dropdown.Toggle variant='primary' id='dropdown-basic'>
				{title}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href='#/action-1' active>
					Currently Reading
				</Dropdown.Item>
				<Dropdown.Item href='#/action-2'>Want to Read</Dropdown.Item>
				<Dropdown.Item href='#/action-3'>Read</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item href='#/action-4'>None</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

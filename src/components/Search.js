import React from 'react'
import Nav from 'react-bootstrap/Nav'

export const Search = () => {
	return (
		<Nav
			fill
			variant='tabs'
			activeKey='/home'
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
			<Nav.Item>
				<Nav.Link href='/home'>Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey='link-1'>Search</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey='link-2'>About</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

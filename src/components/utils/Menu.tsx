import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { css } from '@emotion/css'

interface Props {
	shelf: string
	changeShelf: any
	id: number
}

export const Menu: React.FC<Props> = ({ shelf, changeShelf, id }) => {
	return (
		<DropdownButton
			title={''}
			className={css`
				font-size: 30px;
			`}>
			<Dropdown.Item
				onClick={() => changeShelf(id, shelf, 'currentlyReading')}
				active={shelf === 'currentlyReading'}>
				Currently Reading
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => changeShelf(id, shelf, 'wantToRead')}
				active={shelf === 'wantToRead'}>
				Want to Read
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => changeShelf(id, shelf, 'read')}
				active={shelf === 'read'}>
				Read
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item
				onClick={() => changeShelf(id, shelf, 'none')}
				active={shelf === 'none'}>
				None
			</Dropdown.Item>
		</DropdownButton>
	)
}

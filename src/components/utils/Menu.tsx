import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { css } from '@emotion/css'

interface Props {
	title: string
	shelf: string
}

export const Menu: React.FC<Props> = ({ title, shelf }) => {
	return (
		<DropdownButton
			title={''}
			className={css`
				font-size: 30px;
			`}>
			<Dropdown.Item
				onClick={() => alert('clicked')}
				active={shelf === 'currentlyReading'}>
				Currently Reading
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => alert('clicked')}
				active={shelf === 'wantToRead'}>
				Want to Read
			</Dropdown.Item>
			<Dropdown.Item onClick={() => alert('clicked')} active={shelf === 'read'}>
				Read
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item onClick={() => alert('clicked')} active={shelf === 'none'}>
				None
			</Dropdown.Item>
		</DropdownButton>
	)
}

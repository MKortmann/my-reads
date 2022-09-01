import React from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { css } from '@emotion/css'

import { AddButton, ShelfComponent } from '../index'

export const Home = () => {
	const ShelfNames = ['Currently Reading', 'Want to Read', 'Read']
	return (
		<Container
			className={css`
				margin-top: 25px;
				margin-bottom: 50px;
			`}>
			<Stack gap={4} direction={'vertical'}>
				{ShelfNames.map((title, index) => {
					return <ShelfComponent key={index} title={title}></ShelfComponent>
				})}
			</Stack>
			<AddButton></AddButton>
		</Container>
	)
}

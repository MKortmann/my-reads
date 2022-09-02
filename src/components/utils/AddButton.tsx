import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'

export const AddButton = () => {
	return (
		<div
			className={css`
				position: fixed;
				right: 25px;
				bottom: 25px;
			`}>
			<Link to='/search'>
				<BsFillPlusSquareFill size='4em' />
			</Link>
		</div>
	)
}

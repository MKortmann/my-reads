import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { css, cx } from '@emotion/css'
import { useNavigate } from 'react-router-dom'
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs'

import { subNavStyles } from '../../styles/styles'

export const SubNav = () => {
	const navigate = useNavigate()
	const style = subNavStyles()
	return (
		<Nav
			className={css`
				margin: 20px;
			`}
			fill
			variant='primary'
			activeKey={'/home'}
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
			<Nav.Item>
				<BsFillArrowLeftSquareFill
					className={cx(style.linkIcon)}
					size='3em'
					onClick={() => navigate(-1)}
				/>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={cx(style.link)}
					to='/home'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					Home
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={cx(style.link)}
					to='/search'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					Search
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={cx(style.link)}
					to='/about'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					About
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<BsFillArrowRightSquareFill
					className={cx(style.linkIcon)}
					size='3em'
					onClick={() => navigate(1)}
				/>
			</Nav.Item>
		</Nav>
	)
}

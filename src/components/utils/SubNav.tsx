import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/css'
import { useNavigate } from 'react-router-dom'
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs'

export const SubNav = () => {
	const navigate = useNavigate()
	return (
		<Nav
			className={css`
				margin: 20px;
			`}
			fill
			variant='primary'
			activeKey='/home'
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
			<Nav.Item>
				<BsFillArrowLeftSquareFill
					className={css`
						cursor: pointer;
						:hover {
							color: blue;
						}
					`}
					size='3em'
					onClick={() => navigate(-1)}
				/>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={css`
						text-decoration: none;
						font-size: 20px;
						:hover {
							color: blue;
							font-size: 22px;
						}
					`}
					to='/home'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					Home
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={css`
						text-decoration: none;
						font-size: 20px;
						:hover {
							color: blue;
							font-size: 22px;
						}
					`}
					to='/search'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					Search
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<NavLink
					className={css`
						text-decoration: none;
						font-size: 20px;
						:hover {
							color: blue;
							font-size: 22px;
						}
					`}
					to='/about'
					style={({ isActive }) => ({
						color: isActive ? 'blue' : 'black',
					})}>
					About
				</NavLink>
			</Nav.Item>
			<Nav.Item>
				<BsFillArrowRightSquareFill
					className={css`
						cursor: pointer;
						:hover {
							color: blue;
						}
					`}
					size='3em'
					onClick={() => navigate(1)}
				/>
			</Nav.Item>
		</Nav>
	)
}

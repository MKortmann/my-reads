import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/css'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

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
				<AiFillCaretLeft
					className={css`
						cursor: pointer;
						:hover {
							color: blue;
							font-size: 22px;
						}
					`}
					size='2em'
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
				<AiFillCaretRight
					className={css`
						cursor: pointer;
						:hover {
							color: blue;
							font-size: 18px;
						}
					`}
					size='2em'
					onClick={() => navigate(1)}
				/>
			</Nav.Item>
		</Nav>
	)
}

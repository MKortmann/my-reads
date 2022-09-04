import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { css } from '@emotion/css'
import { NavLink } from 'react-router-dom'

export const NavbarComponent = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
				<Container>
					<NavLink
						to='/home'
						className={css`
							text-decoration: none;
							font-size: 30px;
							margin: 10px;
							color: white;
						`}>
						<img
							alt='mk.svg'
							src='/mk.svg'
							width='45'
							height='45'
							className='d-inline-block align-top'
						/>{' '}
						My Reads
					</NavLink>
				</Container>
			</Navbar>
		</>
	)
}

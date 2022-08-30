import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { css } from '@emotion/css'

export const NavbarComponent = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
				<Container>
					<Navbar.Brand
						href='#home'
						className={css`
							font-size: 30px;
							margin: 10px;
						`}>
						<img
							alt='mk.svg'
							src='/mk.svg'
							width='45'
							height='45'
							className='d-inline-block align-top'
						/>{' '}
						My Reads
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	)
}

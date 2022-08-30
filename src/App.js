import './App.css'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { NavbarComponent, ShelfComponent } from './components/index'
import { css } from '@emotion/css'
import Button from 'react-bootstrap/Button'
import { BsFillPlusSquareFill } from 'react-icons/bs'

function App() {
	const ShelfNames = ['Currently Reading', 'Want to Read', 'Read']
	return (
		<div>
			<NavbarComponent></NavbarComponent>
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
				<div
					className={css`
						position: fixed;
						right: 25px;
						bottom: 25px;
					`}>
					<button className='btn btn-outline-secondary'>
						{/* <BsFillPlusSquareFill size='3em' color='dimgrey' /> Add */}
						{/* <BsFillPlusSquareFill size='3em' color='MidnightBlue' /> Add */}
						<BsFillPlusSquareFill size='3em' color='Teal' /> Add
					</button>
				</div>
				BsFillPlusSquarFill
			</Container>
		</div>
	)
}

export default App

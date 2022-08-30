import './App.css'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { NavbarComponent, ShelfComponent } from './components/index'
import { css } from '@emotion/css'
import Button from 'react-bootstrap/Button'

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
				<Button
					className={css`
						position: fixed;
						right: 25px;
						bottom: 25px;
					`}>
					Add
					<i class='fab fa-android' aria-hidden='true'></i>
				</Button>
			</Container>
		</div>
	)
}

export default App

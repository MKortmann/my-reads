import './App.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

function App() {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint='xxs'>
			<Container>
				<Stack gap={3}>
					<div className='bg-light border'>First item</div>
					<div className='bg-light border'>Second item</div>
					<div className='bg-light border'>Third item</div>
				</Stack>
			</Container>
		</ThemeProvider>
	)
}

export default App

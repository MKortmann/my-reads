import { cx } from '@emotion/css'
import { Link } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { addButtonStyles } from '../../styles/styles'

export const AddButton = () => {
	const style = addButtonStyles()
	return (
		<div className={cx(style.btn)}>
			<Link to='/search'>
				<BsFillPlusSquareFill size='4em' />
			</Link>
		</div>
	)
}

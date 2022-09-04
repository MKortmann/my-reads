import { css } from '@emotion/css'

export const subNavStyles = () => {
	return {
		link: css`
			text-decoration: none;
			font-size: 20px;
			:hover {
				color: blue;
				font-size: 22px;
			}
		`,
		linkIcon: css`
			cursor: pointer;
			:hover {
				color: blue;
			}
		`,
	}
}

export const addButtonStyles = () => {
	return {
		btn: css`
			position: fixed;
			right: 25px;
			bottom: 25px;
		`,
	}
}

export const bookStyles = () => {
	return {
		card: css`
			width: 16rem;
			margin: 10px;
			margin-button: 0;
		`,
		cardImg: css`
			width: 50%;
			height: 7vw;
			margin: auto;
		`,
		menu: css`
			position: absolute;
			top: 0;
			right: 0;
		`,
	}
}

export const searchStyles = () => {
	return {
		icon: css`
    cursor: pointer;
    display: flex
    align-items: center
    :hover {
      color: blue;
      font-size: 2.2em;
    }
  `,
	}
}

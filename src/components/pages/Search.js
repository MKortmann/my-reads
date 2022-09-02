import React, { useEffect } from 'react'
import { getAll } from '../../API/BooksAPI'

export const Search = () => {
	const books = getAll().then((books) => console.log(books))

	return <div>Search</div>
}

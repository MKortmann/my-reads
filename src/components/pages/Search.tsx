import { search } from '../../API/BooksAPI'

export const Search = () => {
	// const books = getAll().then((books) => console.log(books))
	search('car', 10).then((books) => console.log(books))

	return <div>Search</div>
}

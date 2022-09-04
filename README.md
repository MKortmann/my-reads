# MyReads App

The App is basically a virtual bookcase used to store your books an track what
you are reading.
It was developed from **scratch** using React Library (create-react-app) with some extras:

- [`Added Typescript`](https://create-react-app.dev/docs/adding-typescript/)
- [`React Router`](https://reactrouter.com/en/v6.3.0/api#browserrouter)
- [`Bootstrap`](https://react-bootstrap.github.io/getting-started/introduction/)
- [`React Icons`](https://react-icons.github.io/react-icons/)

The app enclosed three shelves:

- **The App contains 3 shelves for stored the books**

  - Currently Reading
  - Want To Read
  - Read

- **The Search Page**

  - This search page allows the user to search for a specific books. The founded
    books is also identified if it is already in the user library shelf or not. At this
    page the user can directly manage the books and see in real time the results.

- **Extras**
  - The main page link to the search and about page.
  - All the pages are linked with each other through the navbar!
  - The users can easily move books from one shelf to another. It works also in
    the Search Page. The Browser URL corresponds with the actual displayed page.
  - The About Page informs about the limitation terms of the BooksAPI.

## How to install the App?

To install the App, please, follow the instructions at Installation section.

## Installation

1. First you have to create a directory in the desire location
2. git clone `ADD HERE GITHUB PROJECT LINK`
3. install all project dependencies with `npm install`
4. start the development server with `npm start`

## Backend Server

To simplify the process I used a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

- [`get`](#get)
- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `get`

Method Signature:

```js
get(bookId)
```

- bookId: `<String>` book id
- Returns a Promise which resolves to a JSON object containing the book requested

### `getAll`

Method Signature:

```js
getAll()
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.
- A promise that resolves into an array of books. Each book is an object.

### `update`

Method Signature:

```js
update(book, shelf)
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Note about React

The app was created used npx create-react-app! I started from scratch. However, I am using
the Udacity BookAPI to fetch and update the books. The API is limited to a number of
78 terms.

### More Information

This project is part of Udacity Nanodegree React. It has the main objective to practice and show my knowledge in React!
--For any extra information, please, feel free to contact me.

### Contributions

The project was done completely by me starting from scratch. However, if you want to contribute, please, do not hesitate to contact me!

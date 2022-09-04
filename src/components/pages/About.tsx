import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { css } from '@emotion/css'

export const About = () => {
	return (
		<Container>
			<h2>The Allowed Search Terms are:</h2>
			<div
				className={css`
					margin: 50px;
					font-size: 20px;
				`}>
				{searchWords.map((word: string, index: number) => {
					return (
						<span key={index}>
							<strong>{index}</strong>-{word}
							{'  '}
						</span>
					)
				})}
			</div>
			<h4>
				The app was developed by: Marcelo Kortmann in a Udacity Nanodegree
				Program
			</h4>
		</Container>
	)
}

export const searchWords = [
	'Android',
	'Art',
	'Artificial Intelligence',
	'Astronomy',
	'Austen',
	'Baseball',
	'Basketball',
	'Bhagat',
	'Biography',
	'Brief',
	'Business',
	'Camus',
	'Cervantes',
	'Christie',
	'Classics',
	'Comics',
	'Cook',
	'Cricket',
	'Cycling',
	'Desai',
	'Design',
	'Development',
	'Digital Marketing',
	'Drama',
	'Drawing',
	'Dumas',
	'Education',
	'Everything',
	'Fantasy',
	'Film',
	'Finance',
	'First',
	'Fitness',
	'Football',
	'Future',
	'Games',
	'Gandhi',
	'Homer',
	'Horror',
	'Hugo',
	'Ibsen',
	'Journey',
	'Kafka',
	'King',
	'Lahiri',
	'Larsson',
	'Learn',
	'Literary Fiction',
	'Make',
	'Manage',
	'Marquez',
	'Money',
	'Mystery',
	'Negotiate',
	'Painting',
	'Philosophy',
	'Photography',
	'Poetry',
	'Production',
	'Programming',
	'React',
	'Redux',
	'River',
	'Robotics',
	'Rowling',
	'Satire',
	'Science Fiction',
	'Shakespeare',
	'Singh',
	'Swimming',
	'Tale',
	'Thrun',
	'Time',
	'Tolstoy',
	'Travel',
	'Ultimate',
	'Virtual Reality',
	'Web Development',
	'iOS',
]

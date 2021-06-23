import React from 'react'
import { Link } from 'react-router-dom'

const Books = ( {books, deleteBook} ) => {

    const handleDelete = () => {
        console.log(books)
        deleteBook(books)
    }

    return (
        <div>
            <Link to={`/book/${books.id}`}>
            <img className="image" src={books.image} />
            </Link>
            <button onClick={handleDelete} id="button">X</button>
        </div>
    )
}

export default Books
import React, { useState } from 'react'
import Books from './Books'
import BookForm from './BookForm'


const Shelf = ({shelves, deleteShelf, addBook, deleteBook}) => {
    const [bookFormFlag, setBookFormFlag] = useState(false)


    const handleDelete = () => {
        deleteShelf(shelves.id)
    }

    const toggleForm = () => {
        setBookFormFlag(false)
    }



    const shelf = shelves.books.map(b => <Books key={b.id} books={b} deleteBook={deleteBook} />)
    
    return (
        <div className="shelves">
            <h2 className="shelf-title">{shelves.genre}</h2>
            <div className="buttons">
                <button onClick={handleDelete} className="button">Delete Shelf</button> 
                {bookFormFlag ? <BookForm toggleForm={toggleForm} shelf={shelves} addBook={addBook} /> : <button className="button" onClick={() => setBookFormFlag(true)}>Add a Book</button>}
            </div>
            {shelf}
        </div>
    )
}


    export default Shelf







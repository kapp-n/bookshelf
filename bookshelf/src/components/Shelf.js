import React, { Component } from 'react'
import Books from './Books'

const Shelf = ({shelves, deleteShelf}) => {

    const handleDelete = () => {
        deleteShelf(shelves.id)
    }


    const shelf = shelves.books.map(s => <Books key={s.id} books={s} />)
    
    return (
        <div className="shelves">
            <h2 className="shelf-title">{shelves.genre}</h2>
            <button onClick={handleDelete} className="button">Delete Shelf</button>
            {shelf}
        </div>
    )
}


    export default Shelf







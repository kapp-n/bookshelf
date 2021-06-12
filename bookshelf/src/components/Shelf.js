import React from 'react'
import Books from '../containers/Books'

const Shelf = ({ shelves }) => {

    const shelf = shelves.books.map(s => <Books key={s.id} books={s} />)
    return (
        <div className="shelves">
            <h2 className="shelf-title">{shelves.genre}</h2>
            {shelf}
        </div>
    )
}


export default Shelf

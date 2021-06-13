import React from 'react'
import { Link } from 'react-router-dom'

const Books = ( {books} ) => {

    return (
        <div>
            <Link to={`/book/${books.id}`}>
            <img className="image" src={books.image} />
            </Link>
        </div>
    )
}

export default Books
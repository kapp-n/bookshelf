import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Book = (props) => {
    const [book, setBook] = useState([])



    useEffect(() => {
        fetch(`http://localhost:9292/book/${props.match.params.id}`)
        .then(r => r.json())
        .then(data =>{
            console.log(data, "book")
            setBook(data)
        })
    }, [])

    const handleDelete = () => {
        fetch(`http://localhost:9292/book/${props.match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(book.id)
        })
        setBook([])
    }
        


    return (
        <div className="book">
            <h1>{book.name}</h1>
            <h2>By: {book.author}</h2>
            <img src={book.image} />
            <hr />
            <h4>{book.summary}</h4>
            <h5>Page Count: {book.pages}</h5>
            <br />
            <Link to={'/shelves'}>
            <button className="button" onClick={handleDelete}>Delete Book</button>
            </Link>
        </div>
    )
}

export default Book
import React, { useState, useEffect } from 'react'


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


    return (
        <div className="book">
            <h1>{book.name}</h1>
            <h2>By: {book.author}</h2>
            <img src={book.image} />
            <hr />
            <h4>{book.summary}</h4>
            <h5>Page Count: {book.pages}</h5>
        </div>
    )
}

export default Book
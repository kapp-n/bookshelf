import React, {useState, useEffect} from 'react'
import Shelf from '../components/Shelf'
import ShelfForm from './ShelfForm'




const Shelves = () => {
    const [shelves, setShelves] = useState([])
    const [shelfFormFlag, setShelfFormFlag] = useState(false)


    useEffect(() => {
        fetch('http://localhost:9292/shelves')
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setShelves(data)
        })
    }, [])

    const deleteTheShelf = (id) => {
        console.log(id)
        fetch('http://localhost:9292/shelves', {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(id)
        })
        const newShelves = shelves.filter(s => s.id != id)
        setShelves(newShelves)
        console.log(shelves) 
    }


    const addBook = (book) => {
        fetch('http://localhost:9292/shelves', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            const newShelves = data
            setShelves(newShelves)
        })
    }

    const addShelf = (genre) => {
        console.log(genre)
        fetch('http://localhost:9292/shelves',{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(genre)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setShelves([...shelves, data])
        })
        setShelfFormFlag(false)
    }

    const deleteBook = (b) => {
        fetch(`http://localhost:9292/book/${b.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(b.id)
        })
        .then(r => r.json())
        .then(data =>{
            setShelves(data)
        })
    }
    

    
    const allShelves = shelves.map(shelf => <Shelf key={shelf.id} shelves={shelf} deleteShelf={deleteTheShelf} addBook={addBook} deleteBook={deleteBook} />)

    return (
        <div className="library">
            <h1>Your Library</h1>
            {shelfFormFlag ? <ShelfForm addShelf={addShelf} /> : <button className="button" onClick={() => setShelfFormFlag(true)}>Add a Shelf</button>}
            <hr />
            <br />
            <br />
            {allShelves}
        </div>
    )
}


export default Shelves
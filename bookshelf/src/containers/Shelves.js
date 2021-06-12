import React, {useState, useEffect} from 'react'
import Shelf from '../components/Shelf'




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

const allShelves = shelves.map(shelf => <Shelf key={shelf.id} shelves={shelf} />)


    return (
        <div>
            <h1>Your Library</h1>
            <hr />
            <br />
            <br />
            {allShelves}
        </div>
    )
}


export default Shelves
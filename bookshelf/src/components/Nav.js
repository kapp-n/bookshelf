import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6x',
    textDecoration: 'none',
    color: 'pink'
}


const Nav = () => {
    return (
        <div className="Nav">
            <NavLink
			    to="/"
				exact
				style={link}
				activeStyle={{
					background: 'white'
				}}
			>Home</NavLink>

			<NavLink
			    to="/shelves"
				exact
				style={link}
				activeStyle={{
					background: 'white'
				}}
			>Library</NavLink>
        </div>
    )
}


export default Nav
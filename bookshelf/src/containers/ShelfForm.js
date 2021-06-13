import React, { Component } from 'react'

export default class ShelfForm extends Component {
    state = {
        genre: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addShelf(this.state)
        console.log(this.state)
    }


    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Genre: </label>
                    <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

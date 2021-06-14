import React, { Component } from 'react'


export default class BookForm extends Component {

        state = {
            name: "",
            author: "", 
            summary: "",
            pages: 0,
            image: "",
            shelf_id: 0
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
                shelf_id: this.props.shelf.id
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            this.props.addBook(this.state)
            console.log(this.state)
            this.props.toggleForm()
        }

    render() {
        return (
            <div className="form">
                <form id="book" onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <label>Author: </label>
                    <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChange} />
                    <br />
                    <label>Summary: </label>
                    <input type="text" id="summary" name="summary" value={this.state.summary} onChange={this.handleChange} />
                    <br />
                    <label>Image URL: </label>
                    <input type="text" name="image" id="imageurl" value={this.state.image} onChange={this.handleChange} />
                    <br />
                    <label>Number of Pages: </label>
                    <input type="number" id="pages" name="pages" value={this.state.pages} onChange={this.handleChange} />
                    <input className="button" type="submit" />
                </form>
            </div>
        )
    }
}

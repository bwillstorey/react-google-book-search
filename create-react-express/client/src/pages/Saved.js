import React, { Component } from "react";
import API from "../utils/API";


class Saved extends Component {

    state = {
        saved: []
    };

    componentDidMount() {
        API.dbAPI.getSavedBooks(this.setSavedBooks)
    }

    setSavedBooks = books => {
        this.setState({ saved: books })
    }

    render() {
        return(
            <div>
                {this.state.saved.map(book => (
                    <h1 key={book.id}>{book.title}</h1>
                ))}
            </div>
        )
    }
}

export default Saved;
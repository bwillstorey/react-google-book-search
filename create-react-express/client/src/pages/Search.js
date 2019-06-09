import React, { Component } from "react";
import {googleAPI} from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Search extends Component {

    state = {
        input: "",
        results: [],
        searched: false,
        selectedOption: "title",
        radioButtons: ["title", "subject"]
    }

    handleTextChange = event => {
        this.setState({ input: event.target.value })
    }

    handleRadioChange = event => {
        this.setState({ selectedOption: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        googleAPI.searchBooks(this.state.input, this.state.selectedOption, this.updateResults)
    }

    updateResults = results => {
        this.setState({ results, searched: true });
    }

    componentWillMount() {
        console.log("Unmounted.");
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <SearchForm
                    inputValue={this.state.input}
                    radioButtons={this.state.radioButtons}
                    handleTextChange={this.state.handleTextChange}
                    handleRadioChange={this.state.handleRadioChange}
                    selectedOption={this.state.selectedOption}
                    handleFormSubmit={this.state.handleFormSubmit}
                />
                {this.state.results.map(result => (
                    <SearchResults key={result.id} book={result} />
                ))}
            </div>
        )
    }
}

export default Search;
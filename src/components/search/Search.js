import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import SearchList from "./SearchList"

export default class Search extends Component {

  state = {
    searchedBooks: [],
    query: {}
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    this.setState({query: evt.target.value})
  }
  // Get data from remoteURL on button click
  handleButtonClick = evt => {
    DataManager.getAll("volumes", this.state.query)
    .then(result => {
        const resultData = result.items
      console.log(result.items)
      const searchedBooks = resultData.map(item => this.listToDom(item))
      console.log(searchedBooks)
      this.setState({searchedBooks: searchedBooks})
    }
    )
  }

  // Take data and create an object with it
  listToDom = (item) => {
        let newBookItem = {
          volumeId: item.id,
          image: item.volumeInfo.imageLinks.thumbnail,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          description: item.volumeInfo.description
        }
return newBookItem

    }

  render() {
    return (
      <React.Fragment>
        <div>
          <input
            onChange={this.handleFieldChange}
            className="showInput"
            type="text"
            id="search"
            placeholder="Enter Book Title" />
          <button type="submit" onClick={this.handleButtonClick} className="btn btn-primary">Search</button>
        </div>
        <SearchList {...this.props}  searchedBooks={this.state.searchedBooks}{...this.props} />
      </React.Fragment>
    )
  }
}

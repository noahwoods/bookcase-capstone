import React, { Component } from "react"
import DataManager from "../../module/DataManager"
// import SearchList from "./SearchList"

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
    .then(result =>
      // console.log(result.items))
      this.listToDom(result.items)).then((searchedBooks)=> this.setState({searchedBooks: searchedBooks}))

  }
  // Take data and create an object with it
  listToDom = (result) => {
    let searchedBooks = []
    return result.map(result => {
      // if(result.volumes){
        let newBookItem = {
          volumeId: result.volumeInfo.id,
          image: result.volumeInfo.imageLinks.thumbnail,
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors,
          description: result.volumeInfo.description
        }
        searchedBooks.push(newBookItem)
return searchedBooks

      // }
    })

  }

  render() {
    console.log(this.state.searchedBooks)
    return (
      <React.Fragment>
        <div>
          <input
            onChange={this.handleFieldChange}
            className="showInput"
            type="text"
            id="search"
            placeholder="Enter Book Title" />
          <button type="submit" onClick={this.handleButtonClick} className="btn btn-primary">Submit</button>
        </div>
        {/* <SearchList {...this.props}  searchedBooks={this.state.searchedBooks} /> */}
      </React.Fragment>
    )
  }
}

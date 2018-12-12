import React, { Component } from "react"
// import ApiManager from "../../module/ApiManager"
// import SearchList from "./SearchList"

export default class Search extends Component {

  state = {
    searchedBooks: []
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructNewSearch = evt => {
    console.log(evt)
    // let selectedBooks = []
    evt.preventDefault()
    // const credentials = JSON.parse(sessionStorage.getItem('credentials'))
    // const url = `${remoteSearchURL}/`
    // return fetch(url)
    //   .then(data => data.json())
    //   .then(data => {
    //     return data.results.map(data => {
    //       if (data.volumes) {
    //         let newBookObject = {
    //           volumeId: volumes.items.id,
    //           image: volumes.items.volumeInfo.imageLinks.thumbnail,
    //           title: volumes.items.volumeInfo.title,
    //           author: volumes.itms.volumeInfo.authors,
    //           description: volumes.volumeInfo.description,
    //           credentials: credentials
    //         }
    //         return newBookObject.push(selectedBooks)
    //       }
    //     })


    //   })
    //   .then(() => this.setState({ new: selectedBooks }))
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
          <button type="submit" onClick={this.constructNewSearch} className="btn btn-primary">Submit</button>
        </div>
        {/* <SearchList {...this.props}  selectedShow={this.state.selectedShows} /> */}
      </React.Fragment>
    )
  }
}

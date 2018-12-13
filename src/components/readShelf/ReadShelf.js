import React, { Component } from "react"
import DataManager from '../../module/DataManager'

export default class ReadShelf extends Component {
  credentials = JSON.parse(localStorage.getItem('credentials'))

  state = {
    readShelf: []
  }

  // deleteBook = (events, id) => {
  //   DataManager.delete("events", id)
  //   .then(() => DataManager.getAllByUser("events", this.credentials.id))
  //   .then(allEvents => this.setState({
  //     events: allEvents
  //   })
  //   )
  // }

  componentDidMount() {
    const newState = {}
    DataManager.getData("volumes", this.credentials.id)
      .then(readShelf => {
        newState.readShelf = readShelf
      })
      .then(() =>
        this.setState(newState))
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
      {/* <section className="searchList">
        {
          this.props.searchedBooks.map(book =>

            <div key={(book.volumeId)}>
            <div>
              {book.image}
            </div>
            <div>
              {book.title}
            </div>
            <div>
              {book.author}
            </div>
            <div>
            {book.description}
            </div>
            </div>

          )
        }
      </section> */}
      </React.Fragment>

    )
  }

}
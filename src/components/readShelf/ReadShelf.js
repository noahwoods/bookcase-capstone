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


  deleteBook = (evt) => {
    // evt.preventDefault()
    const bookId = evt.target.id
    const book = this.state.readShelf.find(book=> book.volumeId === bookId)
    console.log(this.state.readShelf)
  }


  componentDidMount() {
    const newState = {}
    DataManager.getData("readShelf", this.credentials.id)
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
      {/* <section className="readList"> */}
        {
          this.state.readShelf.map(book =>

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
            <button type="submit" id={book.volumeId} onClick={this.deleteBook}>Delete</button>
            </div>
          )
        }
      {/* </section> */}
      </React.Fragment>

    )
  }

}
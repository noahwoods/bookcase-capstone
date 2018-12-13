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
        {/* <section>
          this.state.events.map(events =>
        <div key="{volumes.items.id">
            {volumes.items.volumeInfo.imageLinks.thumbnail}
          </div>
          <div>
            {volumes.items.volumeInfo.title}
          </div>
          <div>
            {volumes.items.volumeInfo.authors}
          </div>
          <div>
            {volumes.items.volumeInfo.description}
          </div>

        </section> */}
      </React.Fragment>

    )
  }

}
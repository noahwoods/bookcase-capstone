import React, { Component } from "react"

export default class ToReadShelf extends Component {

  state = {
    toReadShelf: []
  }

  state = {
    readShelf: []
  }
  componentDidMount() {
    let readShelf = []
    this.props.volumes.filter((volumes => this.credentials === volumes.userId))
    .map(volumes => {

      const url = `http://localhost:5002/toReadShelf`
      return fetch(url)
        .then(data => data.json())
        .then(data => {
          let bookObject = {
            volumeId: volumes.items.id,
            image: volumes.items.volumeInfo.imageLinks.thumbnail,
            title: volumes.items.volumeInfo.title,
            author: volumes.itms.volumeInfo.authors,
            description: volumes.volumeInfo.description,
          }
          readShelf.push(bookObject)
          this.setState({
            readShelf: readShelf })
        })

    })
  }

  render() {

    return (
      <section className="readShelf">
        {
          this.state.showArray.map(volume => {
            return (<div key={volume.id}>
              <div>
              <h2>Read Shelf</h2>
              </div>
              <div>
              {/* <DetailsModal show={show} /> */}
              </div>
            </div>
            )
          }
          )
        }
      </section>
    )
  }
}
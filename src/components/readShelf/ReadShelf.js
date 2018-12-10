import React, { Component } from "react"
import DataManager from '../../module/DataManager'


export default class ReadShelf extends Component {

  state = {
    readShelf: []
  }
  componentDidMount() {
    let readShelf = []
    this.props.volumes.filter((volumes => this.credentials === volumes.userId))
    .map(volumes => {
      // TODO: what to put in query field
      const url = `https://www.googleapis.com/books/v1/volumes?q=${volumes.id}>&key=AIzaSyCpwmsG50yStRmHpnHwKZrwJhGfg-4aZUk`
      return fetch(url)
        .then(data => data.json())
        .then(data => {
          let bookObject = {
            volumeId: volumes.items.id,
            image: volumes.items.volumeInfo.imageLinks.thumbnail,
            title: volumes.items.volumeInfo.title,
            author: volumes.itms.volumeInfo.authors,
            description: volumes.volumeInfo.description,
            apiID: data.id
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
            return (<div className="poster-Group" key={volume.id}>
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
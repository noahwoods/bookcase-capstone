import React, { Component } from "react"


export default class SearchList extends Component {

  render() {
    return (
      <section className="searchList">
        {
          this.props.searchedBooks.map(volumes => {
            return (
            <div className="poster-Group" key={volumes.items.volumeinfo.id}>
            </div>
            )
          }
          )
        }
      </section>
    )
  }
}
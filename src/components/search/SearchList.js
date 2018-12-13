import React, { Component } from "react"


export default class SearchList extends Component {

  render() {
    console.log(this.props)
    return (
      <section className="searchList">
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
            {/* <button type="submit" onClick={this.props.addBook("volumes", book)} color="blue">Save</button> */}
            </div>

          )
        }
      </section>
    )
  }
}
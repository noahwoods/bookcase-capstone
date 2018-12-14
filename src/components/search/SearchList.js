import React, { Component } from "react"



export default class SearchList extends Component {



  saveBook = (evt) => {
    // evt.preventDefault()
    const bookId = evt.target.id
    const book = this.props.searchedBooks.find(book=> book.volumeId === bookId)

    // const createBook = {
    //   volumeId: book.volumeId,
    //   image: book.image,
    //   title: book.title,
    //   author: book.author,
    //   description: book.description

    // }

    this.props.addBook(book).then(() => this.props.history.push("/readShelf"))

  }


  render() {
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
            <button type="submit" id={book.volumeId} onClick={this.saveBook} color="blue">Save</button>
            </div>

          )
        }
      </section>
    )
  }
}
// this.saveBook("volumes", book)
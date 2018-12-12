// import React, { Component } from "react"

// export default class EventForm extends Component {
//   state = {
//     id: "",
//     image: "",
//     title: "",
//     author: ""
//   }
//   handleFieldChange = evt => {
//     const stateToChange = {}
//     stateToChange[evt.target.id] = evt.target.value
//     this.setState(stateToChange)

// }

// searchNewBook = evt => {
//   evt.preventDefault()

//   getAll("resource")

//   const createShelf = {
//     id: this.state.id,
//     image: this.state.image,
//     title: this.state.title,
//     author: this.state.author

//   }

//   this.props.addBook(createShelf).then(() => this.props.history.push("/shelves"))
// }

// render() {
//   return (
//     <form>
//       <label htmlFor="bookSearch">Search</label>
//       <input type="text" required
//         className="event-form-control"
//         onChange={this.handleFieldChange}
//         id="name"
//         placeholder="Book Search" />
//         <button type="submit" onClick={this.searchNewBook}>Save</button>
//     </form>

//     )
//     }
// }
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import DataManager from '../module/DataManager'
// import ReadShelf from './readShelf/ReadShelf'
// import ToReadShelf from './toReadShelf/ToReadShelf'
import Login from './login/LoginForm'
import Register from './login/RegisterForm'
import Search from './search/Search'


export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  // call login here
  credentials = JSON.parse(localStorage.getItem('credentials'))
  credentials = { id: 1 }
  state = {
    users: [],
    readShelf: [],
    toReadShelf: []
  }

  getUsers = () => {
    return DataManager.getData("users")
      .then((users) => this.setState({ users: users }))
  }

  getRead = () => {
    return DataManager.getData("readShelf")
      .then((readShelf) => this.setState({ readShelf: readShelf }))
  }

  getToRead = () => {
    return DataManager.getData("toReadShelf")
      .then((toReadShelf) => this.setState({ toReadShelf: toReadShelf }))
  }

  addUser = users => DataManager.saveData("users", users)
    .then(() => DataManager.getData("users"))
    .then(users => this.setState({
      users: users
    }))

  addBook = books => DataManager.save("books", books)
    .then(() => DataManager.getData("books"))
    .then(books => this.setState({
      books: books
    }))


  deleteBook = id => DataManager.delete("books", id)
    .then(() => DataManager.getData("books"))
    .then(books => this.setState({
      books: books
    }))

  componentDidMount() {
    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })

    DataManager.getAll("readShelf")
      .then(allRead => {
        newState.readShelf = allRead
      })

    DataManager.getAll("toReadShelf")
      .then(allToRead => {
        newState.toReadShelf = allToRead
      })

    DataManager.getAll("search")
      .then(allNews => {
        newState.news = allNews
      })
      .then(() =>
        this.setState(newState))

  }

  render() {
    return (
      <React.Fragment>

        <Route exact path="/register" render={(props) => {
          return <Register {...props}
          addUser={this.addUser}
          users={this.state.users} />
        }} />
        <Route exact path="/login" component={Login} />

         <Route path="/search" render={(props) => {
          return <Search getShows={this.getShows} {...props} />
        }} />

      </React.Fragment>
    )
  }
}



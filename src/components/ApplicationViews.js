import { Route } from 'react-router-dom'
import React, { Component } from "react"
import DataManager from '../module/DataManager'
import ReadShelf from './readShelf/ReadShelf'
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

  addBook = books => DataManager.saveData("readShelf", books)
    .then(() => DataManager.getData("readShelf"))
    .then(books => this.setState({
      readShelf: books
    }))


  deleteBook = id => DataManager.delete("books", id)
    .then(() => DataManager.getData("books"))
    .then(books => this.setState({
      books: books
    }))

  componentDidMount() {
    const newState = {}

    DataManager.getData("users")
      .then(allUsers => {
        newState.users = allUsers
      })

    DataManager.getData("readShelf")
      .then(allRead => {
        newState.readShelf = allRead
      })

    DataManager.getData("toReadShelf")
      .then(allToRead => {
        newState.toReadShelf = allToRead
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

        <Route exact path ="/readShelf" render={(props) => {
          return <ReadShelf {...props} />
        }}/>
        <Route exact path="/search" render={(props) => {
          return <Search {...props}
          addBook={this.addBook} />
        }} />
      </React.Fragment>
    )
  }
}



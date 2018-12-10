import { Route } from 'react-router-dom'
import React, { Component } from "react"
import DataManager from '../module/DataManager'
import ReadShelf from '../readShelf/ReadShelf'
import ToReadShelf from '../toReadShelf/ToReadShelf'


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

  addUser = users => DataManager.saveData("users", users)
  .then(() => DataManager.getAll("users"))
  .then(users => this.setState({
    users: users
  }))

  addBook = books => DataManager.add("books", books)
  .then(() => DataManager.getAll("books"))
  .then(books => this.setState({
    books: books
  }))

  // TODO: how to set up api for this stuff

  deleteBook = id => DataManager.delete("books", id)
    .then(() => DataManager.getAll("books"))
    .then(books => this.setState({
      books: books
    }))
}


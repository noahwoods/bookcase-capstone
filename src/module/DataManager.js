
const localURL = "http://localhost:5002"
const remoteSearchURL= "https://www.googleapis.com/books/v1"
const apiKey = "AIzaSyCpwmsG50yStRmHpnHwKZrwJhGfg-4aZUk"

export default Object.create(null, {
  get: {
    value: (resource, id) => {
      return fetch(`${remoteSearchURL}/${resource}/${id}`)
        .then(result => result.json())
    }
  },

  getAllAscend: {
    value: (resource) => {
      return fetch(`${remoteSearchURL}/${resource}?_sort=date&_order=asc`)
        .then(result => result.json())
    }
  },

  getAll: {
    value: (resource, query) => {

      return fetch(`${remoteSearchURL}/${resource}?q=${query}&key=${apiKey}`)
        .then(result => result.json())
    }
  },

  getUserId: {
    value: (credentials) => {
      return fetch(`${localURL}/users?email=${credentials}`)
        .then(result => result.json())
    }
  },

  getData: {
    value: (resource) => {
      return fetch(`${localURL}/${resource}`)
        .then(response => response.json())
    }
  },

  saveData: {
    value: (resource, entryObject) => {
      return fetch(`${localURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)

      })
        .then(result => result.json())
    }
  },

  deleteData: {
    value: (resource, id) => {
      return fetch(`${localURL}/${resource}/${id}`, {
        method: "DELETE"
      })
        .then(result => result.json())
    }
  },


  editData: {
    value: (resource, id, item) => {
      return fetch(`${localURL}/${resource}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      })
        .then(result => result.json())
    }
  },

  searchNP: {
    value: function (username, password) {
      return fetch(
        `${localURL}/users?email=${username}&password=${password}`
      ).then(e => e.json())
    }
  },

})
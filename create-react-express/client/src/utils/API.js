import axios from "axios";
require("dotenv").config();

export const googleAPI = {
    searchBooks: (query, queryType, callback) => {
        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${query}&maxResults=40&key=${process.env.GOOGLE_KEY}`
        axios.get(queryURL)
          .then((res) => {
              const response = (res.data.items) ? res.data.items : []
              callback(response)
          })
    }
}

export const dbAPI = {
    getSavedBooks: callback => {
        axios.get("/api/books")
          .then(res => callback(res.data))
          .catch(err => console.log(err)) 
    },
    getSavedBook: (id, callback) => {
        axios.get(`/api/books/${id}`)
          .then(res => callback(res.data))
          .catch(err => console.log(err))
    },
    saveBook: callback => {
        axios.post("/api/books")
          .then(res => callback(res.data))
          .catch(err => console.log(err))
    },
    deleteBook: (id, callback) => {
        axios.delete(`/api/books/${id}`)
          .then(res => callback())
          .catch(err => console.log(err))
    }
}
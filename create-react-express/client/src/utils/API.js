import axios from "axios";

export const googleAPI = {
    searchBooks: (query, queryType, callback) => {
        const queryURL = "https://www.googleapis.com/books/v1/volumes?q=${queryType}:${query}&maxResults=40&key=${process.env.GOOGLE_KEY}"
        axios.get(queryURL)
          .then((res) => {
              const response = (res.data.items) ? res.data.items : []
              callback(response)
          })
    }
}

export const dbAPI = {
    getSavedBooks: callback => {
        axios.get("/api")
          .then(res => callback(res.data))
          .catch(err => console.log(err)) 
    },
    getSavedBook: (id, callback) => {
        axios.get("/api/${id}")
          .then(res => callback(res.data))
          .catch(err => console.log(err))
    },
    saveBook: callback => {
        axios.post("/api")
          .then(res => callback(res.data))
          .catch(err => console.log(err))
    },
    deleteBook: (id, callback) => {
        axios.delete("/api/${id}")
          .then(res => callback())
          .catch(err => console.log(err))
    }
}
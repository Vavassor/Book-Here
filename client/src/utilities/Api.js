import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/book");
  },
  getBook: function(id) {
    return axios.get("/api/book/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },
  saveBook: function(book) {
    return axios.post("/api/book", book);
  },
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=AIzaSyABed4Dm8BS7hBD4eh2AdtkqkrGJ-4xdCQ`);
  },
};
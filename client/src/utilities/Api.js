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
};
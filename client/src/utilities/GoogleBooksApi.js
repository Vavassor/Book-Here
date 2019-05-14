import axios from "axios";

export default {
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=AIzaSyABed4Dm8BS7hBD4eh2AdtkqkrGJ-4xdCQ`);
  },
};
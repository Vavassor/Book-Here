const models = require("../models");

function handleError(error, response) {
  return response.status(500).json(error);
}

module.exports = {
  create: (request, response) => {
    models.Book
      .create(request.body)
      .then(book => response.json(book))
      .catch(error => handleError(error, response));
  },
  destroy: (request, response) => {
    models.Book
      .findById({_id: request.params.id})
      .then(book => book.remove())
      .then(book => response.status(204).end())
      .catch(error => handleError(error, response));
  },
  findAll: (request, response) => {
    models.Book
      .find(request.query)
      .then(books => response.json(books))
      .catch(error => handleError(error, response));
  },
  findById: (request, response) => {
    models.Book
      .findById(request.params.id)
      .then(book => response.json(book))
      .catch(error => handleError(error, response));
  },
};
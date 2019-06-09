const router = require("express").Router();
const booksController = require("../../controller/booksController");

// "/api/books" routing
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// "/api/books/:id" routing
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove)

module.exports = router;
const express = require("express");
const app = express();

let books = [
  {
    perticu: "GameOfThrones",
    Title: "GameOfThrones",
    page: "472",
  },
  {
    perticu: "HarryPotter",
    Title: "HarryPotter",
    page: "962",
  },
];

const allbooks = (req, res, next) => {
  console.log("Fetching all Books");
  next();
};

const singlebook = (req, res, next) => {
  next();
};

app.get("/book", allbooks, (req, res) => {
  return res.json(books);
});

app.get("/book/:perticu", singlebook, (req, res) => {
  const perticu = req.params.perticu;
  for (let book of books) {
    if (book.perticu === perticu) {
      res.json(book);
      return;
    }
  }

  res.status(404).send({ Error: "Check entered Path Once more" });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

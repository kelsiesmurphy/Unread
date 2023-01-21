const express = require ('express');
const app = express();

const cors = require('cors');
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
app.use(express.json());
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('book_data');
    const booksCollection = db.collection('books');
    const booksRouter = createRouter(booksCollection);
    app.use('/api/books', booksRouter);
  })
  .catch(console.err);



app.listen(9000, function () {
    console.log('App running on port 9000');
})
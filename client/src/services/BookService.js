const baseURL = 'http://localhost:9000/api/books';

const BookService = {

//    gets All books from database
    getBooks() {
        return fetch(baseURL)
        .then(res => res.json());
    },

//    get single book from d
    getSingleBook(id) {
        return fetch(baseURL + "/" + id)
        .then(res => res.json());
    },

// Adding a book to the database
    addBook(updatedBook) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(updatedBook),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

 // Updating a book
    updateBook(book) {
        return fetch(baseURL + "/" +  book._id, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

// Delete a book
    deleteBook(id) {
        return fetch(baseURL + "/" + id, {
            method: 'DELETE'
        });
    }
};

export default BookService;
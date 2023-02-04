import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';
import BookService from '../services/BookService';
import UserService from '../services/UserService';

const MainContainer = () => {
  
  const [searchResults, setSearchResults] = useState([])
  const [searchBarInput, setSearchBarInput] = useState('')
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  console.log(isLoading)

  useEffect( () => {
      fetch( `https://openlibrary.org/search.json?q=${searchBarInput}` )
      .then( res => res.json())
      .then(bookData => {
          const bookPromises = bookData.docs.splice(0, 20).map((doc) => {
          return fetch(`https://openlibrary.org/${doc.key}.json`)
              .then(res => res.json())
          });
          Promise.all(bookPromises)
          .then(books => {
          setSearchResults(books);
          setIsLoading(false)
          });
      })

  }, [searchBarInput]);

  const handleSubmitForm = (updatedValue) => { 
    setIsLoading(true)
    setSearchBarInput(updatedValue)
  }

  const onBookSelected = (book) => {
    const updatedBook = {
      "title": book.title ? book.title : "Title not available",
      "author_name": "TBC",
      "cover_image_url": book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "/book-cover-unavailable.svg",
      "description": typeof book.description === "string" ? book.description : "Description not available"
    }
    BookService.addBook(updatedBook) 
    .then((savedBook) => {
        const copyUser = {...user}
        copyUser.unreadBooks.push(savedBook)
        setUser(copyUser)
        UserService.updateUser(copyUser)
    })
  }

  const onBookRemoved = (bookToRemove) => {
    const copyUser = {...user}
    console.log('bookToRemove', bookToRemove);
    const bookToRemoveIndex = copyUser.unreadBooks.findIndex(book => book._id === bookToRemove._id)
    console.log('bookToRemoveIndex', bookToRemoveIndex);
    if (bookToRemoveIndex >= 0) {
        copyUser.unreadBooks.splice(bookToRemoveIndex, 1)
        BookService.deleteBook(bookToRemove._id);
        setUser(copyUser)
        UserService.updateUser(copyUser)
    }
    else {
        console.log('else triggered');
        const bookToRemoveIndex = copyUser.readBooks.findIndex(book => book._id === bookToRemove._id)
        copyUser.readBooks.splice(bookToRemoveIndex, 1)
        BookService.deleteBook(bookToRemove._id);
        setUser(copyUser)
        UserService.updateUser(copyUser)
    }
  }
      
  const onFormSubmit = (login) => {
    const newUser = {userlogin: login, "unreadBooks" : [], "readBooks" : []}
    UserService.addUser(newUser)
    .then(savedUser => setUser(savedUser));
  };

  const onBookRead = (bookRead) => {
    const copyUser = {...user}
    const bookReadIndex = copyUser.unreadBooks.findIndex(book => book._id === bookRead._id)
    copyUser.unreadBooks.splice(bookReadIndex, 1)
    copyUser.readBooks.push(bookRead)
    setUser(copyUser)
    UserService.updateUser(copyUser)
  }

  const onBookUnread = (bookUnread) => {
    console.log('unread-home');
    const copyUser = {...user}
    const bookUnreadIndex = copyUser.readBooks.findIndex(book => book._id === bookUnread._id)
    copyUser.readBooks.splice(bookUnreadIndex, 1)
    copyUser.unreadBooks.push(bookUnread)
    setUser(copyUser)
    UserService.updateUser(copyUser)
  }

  return (
      <>
      <Router>
          <Routes>
              <Route path='/' element={ <LoginPage onFormSubmit={onFormSubmit} user={user}/> } />
              <Route path='/discover' element={ <HomePage handleSubmitForm={handleSubmitForm}/> } />
              <Route path='/books' element={ <ResultsPage isLoading={isLoading} searchResults={searchResults} onBookSelected={onBookSelected}/> } />
              <Route path='/user' element={ <UserPage user={user} onBookRemoved={onBookRemoved} onBookRead={onBookRead} onBookUnread={onBookUnread}/> } />
              <Route path='/books/:id' element={ <BookPage onBookRead={onBookRead} onBookUnread={onBookUnread}/> } /> 
          </Routes>
      </Router>
      </>
  );
};


export default MainContainer;
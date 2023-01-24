import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';
import BookService from '../services/BookService';

const MainContainer = () => {

    const [searchResults, setSearchResults] = useState([])
    const [searchBarInput, setSearchBarInput] = useState('')
    const [toReadList, setToReadList] = useState ([])
    const [user, setUser] = useState({})

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
            });
        })
    }, [searchBarInput]);


  useEffect(() => {
    BookService.getBooks()
      .then(books => setToReadList(books))
  }, [])

  const handleSubmitForm = (updatedValue) => { 
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
    .then(savedBook => setToReadList([...toReadList, savedBook]));
  }

      const onBookRemoved = (bookToRemove) => {
        BookService.deleteBook(bookToRemove._id);
        setToReadList(toReadList.filter(book => book._id !== bookToRemove._id));
       
      }
      
      const onFormSubmit = (login) => {
        let copyUser = {...user}
        copyUser ={userlogin: login}
        setUser(copyUser)
    };

    return (
        <>
        <Router>
            <Routes>
                <Route path='/login' element={ <LoginPage onFormSubmit={onFormSubmit} user={user}/> } />
                <Route path='/' element={ <HomePage handleSubmitForm={handleSubmitForm}/> } />
                <Route path='/books' element={ <ResultsPage searchResults={searchResults} onBookSelected={onBookSelected}/> } />
                <Route path='/user' element={ <UserPage toReadList={toReadList} onBookRemoved={onBookRemoved}/> } />
                <Route path='/books/:id' element={ <BookPage/> } /> 
            </Routes>
        </Router>
        </>
    ); //check with tutors that bookpage path is written up properly.
    // Add in an error page?

};


export default MainContainer;
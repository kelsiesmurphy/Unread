import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';

const MainContainer = () => {

  const [searchResults, setSearchResults] = useState([])
  const [searchBarInput, setSearchBarInput] = useState("words")
  const [selectedBook, setSelectedBook] = useState([])
  const [userBookList, setUserBookList] = useState([])

  

  const handleSubmitForm = (updatedValue) => { 
    setSearchBarInput(updatedValue)
  }

  useEffect( () => {
    searchBarInput.replace(/\s/g, '+') 
    // ^ Regular Expression (REGEX) line for replacing white space with '+' to conform to the API.
    fetch( `https://openlibrary.org/search.json?q=${searchBarInput}` )
      .then( res => res.json())
      .then(bookData => {
        listOfIds = bookData.docs[0].map((item) => {
          console.log(item.seed)
          return item.seed
        })
        const bookPromises = listOfIds.slice(0,20).map((id) => {
          return fetch(`https://openlibrary.org/works/${id}.json`)
              .then(res => res.json())
        })
        Promise.all(bookPromises)
          .then(books => {
              console.log(books);
          })
      })
  }, [searchBarInput])


  return (
      <>
      <Router>
          <NavBar id="nav"/>
          <Routes>
              <Route path='/' element={ <HomePage handleSubmitForm={handleSubmitForm}/> } />
              <Route path='/books' element={ <ResultsPage/> } />
              <Route path='/' element={ <HomePage/> } />
              <Route path='/books' element={ <ResultsPage searchResults={searchResults}/> } />
              <Route path='/user' element={ <UserPage/> } />
              <Route path='/book' element={ <BookPage/> } /> 
          </Routes>
      </Router>
      </>
    ); // path for books needs fixed, should be books/{id}
};


export default MainContainer;
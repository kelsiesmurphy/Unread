import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';

const MainContainer = () => {

  const [searchResults, setSearchResults] = useState([])
  const [searchBarInput, setSearchBarInput] = useState("fox")
  const [toReadList, setToReadList] = useState ([])
  
  useEffect( () => {
    searchBarInput.toString().replace(/\s/g, '+') 
    // ^ Regular Expression (REGEX) line for replacing white space with '+' to conform to the API.
    fetch( `https://openlibrary.org/search.json?q=${searchBarInput}` )
      .then( res => res.json())
      .then(bookData => {
        const bookPromises = bookData.docs.splice(0, 20).map((doc) => {
          return fetch(`https://openlibrary.org/${doc.key}.json`)
              .then(res => res.json())
        })
        Promise.all(bookPromises)
        .then(books => {
          setSearchResults(books);
          // console.log(searchResults)
          })
      })
  }, [searchBarInput])

      const handleSubmitForm = (updatedValue) => { 
        setSearchBarInput(updatedValue)
      }

      const onBookSelected = (book) => {
        const copyToReadList = [...toReadList];
        copyToReadList.push(book);
        setToReadList(copyToReadList);
      }

      const onBookRemoved = (bookToRemove) => {
        const copyToReadList = [...toReadList];
        const newToReadList = copyToReadList.filter(book => book !== bookToRemove)
        setToReadList(newToReadList);
      }

    return (
        <>
        <Router>
            <NavBar id="nav"/>
            <Routes>
                <Route path='/' element={ <HomePage handleSubmitForm={handleSubmitForm}/> } />
                <Route path='/books' element={ <ResultsPage searchResults={searchResults} onBookSelected={onBookSelected}/> } />
                <Route path='/user' element={ <UserPage toReadList={toReadList} onBookRemoved={onBookRemoved}/> } />
                <Route path='/book' element={ <BookPage/> } /> 
            </Routes>
        </Router>
        </>
    ); // path for bookpage needs fixed, should be books/{id}

};


export default MainContainer;
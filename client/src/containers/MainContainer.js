import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';

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

    
    const onFormSubmit = (login) => {
        let copyUser = {...user}
        copyUser ={userlogin: login}
        console.log(copyUser);
        setUser(copyUser)
    };

    useEffect(() => {
        console.log('user state updated: ', user);
    }, [user]);

    const handleSubmitForm = (updatedValue) => { 
       setSearchBarInput(updatedValue);
    };

    const onBookSelected = (book) => {
        const copyToReadList = [...toReadList];
        copyToReadList.push(book);
        setToReadList(copyToReadList);
    };

    const onBookRemoved = (bookToRemove) => {
        const copyToReadList = [...toReadList];
        const newToReadList = copyToReadList.filter(book => book !== bookToRemove);
        setToReadList(newToReadList);
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
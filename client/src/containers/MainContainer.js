import React from 'react';
import {BrouserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';
import UserPage from './UserPage';
import BookPage from './BookPage';

const MainContainer = () => {

    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/books' element={ <ResultsPage/> } />
                <Route path='/user' element={ <UserPage/> } />
                <Route path='/book' element={ <BookPage/> } />
            </Routes>
        </Router>
    );
};


export default MainContainer;